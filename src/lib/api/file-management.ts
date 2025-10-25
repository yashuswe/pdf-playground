/**
 * File Management Service API (Port 8001)
 * Handles file upload, download, list, and delete operations
 */

import { ApiClient } from "./client";

const FILE_MANAGEMENT_URL =
  process.env.NEXT_PUBLIC_FILE_MANAGEMENT_URL || "http://localhost:8001";
const client = new ApiClient(FILE_MANAGEMENT_URL);

export interface FileMetadata {
  file_id: string;
  filename: string;
  size: number;
  page_count: number;
  created_at: string;
  file_path?: string;
}

export interface UploadResponse {
  file_id: string;
  filename: string;
  size: number;
  page_count: number;
  created_at: string;
  message: string;
}

/**
 * Upload a PDF file
 */
export async function uploadFile(file: File): Promise<UploadResponse> {
  const formData = new FormData();
  formData.append("file", file);
  return client.postFormData<UploadResponse>("/files/upload", formData);
}

/**
 * List all uploaded files
 */
export async function listFiles(): Promise<FileMetadata[]> {
  const response = await client.get<{ files: FileMetadata[]; count: number }>(
    "/files"
  );
  return response.files;
}

/**
 * Get metadata for a specific file
 */
export async function getFileMetadata(fileId: string): Promise<FileMetadata> {
  return client.get<FileMetadata>(`/files/${fileId}`);
}

/**
 * Download a file
 */
export async function downloadFile(fileId: string): Promise<Blob> {
  return client.getBlob(`/files/${fileId}/download`);
}

/**
 * Get download URL for a file
 */
export function getDownloadUrl(fileId: string): string {
  return client.getUrl(`/files/${fileId}/download`);
}

/**
 * Download a file with workaround for backend bug
 * For processed files (signed, merged, etc.), tries multiple possible file IDs
 */
export async function downloadFileWithWorkaround(
  fileId: string,
  filename?: string
): Promise<Blob> {
  try {
    // First try the original file_id
    return await client.getBlob(`/files/${fileId}/download`);
  } catch (error: any) {
    console.info(`Download failed for ${fileId}, trying workarounds...`);

    // Try to find the actual file by listing all files and matching by name
    try {
      const files = await listFiles();
      console.info(
        `Available files:`,
        files.map((f) => ({ id: f.file_id, name: f.filename }))
      );

      // Look for exact filename match first
      let matchingFile = files.find((file) => file.filename === filename);

      // If no exact match, try partial matches for processed files
      if (!matchingFile && filename) {
        matchingFile = files.find(
          (file) =>
            file.filename.includes("signed") ||
            file.filename.includes("merged") ||
            file.filename.includes("watermarked") ||
            (file.file_path && file.file_path.includes("_page_1.pdf")) ||
            file.filename.includes(filename.split(".")[0]) // Match base name
        );
      }

      if (matchingFile) {
        console.info(
          `Found matching file: ${matchingFile.file_id} (${matchingFile.filename}) for ${filename}`
        );
        return await client.getBlob(`/files/${matchingFile.file_id}/download`);
      } else {
        console.info(`No matching file found for ${filename}`);
        throw new Error(
          `No matching file found for ${filename}. Available files: ${files.map((f) => f.filename).join(", ")}`
        );
      }
    } catch (listError: any) {
      console.error("Failed to list files for workaround:", listError);
      throw new Error(
        `Download failed: ${error.message || "Unknown error"}. List error: ${listError.message || "Unknown list error"}`
      );
    }
  }
}

/**
 * Delete a file
 */
export async function deleteFile(fileId: string): Promise<{ message: string }> {
  return client.delete<{ message: string }>(`/files/${fileId}`);
}
