/**
 * Document Processing Service API (Port 8003)
 * Handles PDF splitting, merging, signing, reordering, and page deletion
 */

import { ApiClient } from "./client";

const DOCUMENT_PROCESSING_URL =
  process.env.NEXT_PUBLIC_DOCUMENT_PROCESSING_URL || "http://localhost:8003";
const client = new ApiClient(DOCUMENT_PROCESSING_URL);

export interface PageRange {
  start: number;
  end: number;
}

export interface SplitRequest {
  file_id: string;
  page_ranges: PageRange[];
  output_names?: string[];
}

export interface SplitResponse {
  original_file_id: string;
  split_files: Array<{
    file_id: string;
    filename: string;
    page_range: PageRange;
    page_count: number;
  }>;
  message: string;
}

export interface MergeRequest {
  file_ids: string[];
  output_name?: string;
}

export interface MergeResponse {
  file_id: string;
  filename: string;
  page_count: number;
  source_files: number;
  message: string;
}

export interface SignRequest {
  file_id: string;
  page_num: number;
  x: number;
  y: number;
  text: string;
  font_size?: number;
  color?: [number, number, number]; // RGB values 0-255
}

export interface SignResponse {
  file_id: string;
  filename: string;
  message: string;
}

export interface ReorderRequest {
  file_id: string;
  page_order: number[];
}

export interface ReorderResponse {
  file_id: string;
  filename: string;
  new_page_count: number;
  message: string;
}

export interface DeletePagesRequest {
  file_id: string;
  page_numbers: number[];
}

export interface DeletePagesResponse {
  file_id: string;
  filename: string;
  remaining_pages: number;
  deleted_pages: number[];
  message: string;
}

/**
 * Split a PDF into multiple files
 */
export async function splitPDF(request: SplitRequest): Promise<SplitResponse> {
  return client.post<SplitResponse>("/process/split", request);
}

/**
 * Merge multiple PDFs into one
 */
export async function mergePDFs(request: MergeRequest): Promise<MergeResponse> {
  return client.post<MergeResponse>("/process/merge", request);
}

/**
 * Add a text signature to a PDF
 */
export async function signPDF(request: SignRequest): Promise<SignResponse> {
  return client.post<SignResponse>("/process/sign", request);
}

/**
 * Reorder pages in a PDF
 */
export async function reorderPages(
  request: ReorderRequest
): Promise<ReorderResponse> {
  return client.post<ReorderResponse>("/process/reorder", request);
}

/**
 * Delete specific pages from a PDF
 */
export async function deletePages(
  request: DeletePagesRequest
): Promise<DeletePagesResponse> {
  return client.delete<DeletePagesResponse>("/process/pages", request);
}
