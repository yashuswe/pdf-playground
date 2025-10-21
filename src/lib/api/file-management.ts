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
 * Delete a file
 */
export async function deleteFile(fileId: string): Promise<{ message: string }> {
  return client.delete<{ message: string }>(`/files/${fileId}`);
}
