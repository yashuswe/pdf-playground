/**
 * PDF Structure Service API (Port 8002)
 * Handles PDF viewing, page rendering, and text extraction
 */

import { ApiClient } from "./client";

const PDF_STRUCTURE_URL =
  process.env.NEXT_PUBLIC_PDF_STRUCTURE_URL || "http://localhost:8002";
const client = new ApiClient(PDF_STRUCTURE_URL);

export interface PageStructure {
  page_number: number;
  text: string;
  width: number;
  height: number;
  rotation: number;
}

export interface PDFStructure {
  file_id: string;
  total_pages: number;
  pages: PageStructure[];
}

export interface PDFInfo {
  file_id: string;
  title?: string;
  author?: string;
  subject?: string;
  creator?: string;
  producer?: string;
  creation_date?: string;
  modification_date?: string;
  page_count: number;
  file_size: number;
  is_encrypted: boolean;
  metadata?: Record<string, any>;
}

/**
 * Get PDF structure with text from all pages
 */
export async function getPDFStructure(fileId: string): Promise<PDFStructure> {
  return client.get<PDFStructure>(`/pdf/${fileId}/structure`);
}

/**
 * Get PDF metadata and information
 */
export async function getPDFInfo(fileId: string): Promise<PDFInfo> {
  return client.get<PDFInfo>(`/pdf/${fileId}/info`);
}

/**
 * Render a specific page as an image
 */
export async function renderPage(
  fileId: string,
  pageNum: number,
  zoom: number = 1.0
): Promise<Blob> {
  return client.getBlob(`/pdf/${fileId}/page/${pageNum}/render?zoom=${zoom}`);
}

/**
 * Get page render URL
 */
export function getPageRenderUrl(
  fileId: string,
  pageNum: number,
  zoom: number = 1.0
): string {
  return client.getUrl(`/pdf/${fileId}/page/${pageNum}/render?zoom=${zoom}`);
}

/**
 * Get page thumbnail
 */
export async function getPageThumbnail(
  fileId: string,
  pageNum: number,
  width: number = 150
): Promise<Blob> {
  return client.getBlob(
    `/pdf/${fileId}/page/${pageNum}/thumbnail?width=${width}`
  );
}

/**
 * Get page thumbnail URL
 */
export function getPageThumbnailUrl(
  fileId: string,
  pageNum: number,
  width: number = 150
): string {
  return client.getUrl(
    `/pdf/${fileId}/page/${pageNum}/thumbnail?width=${width}`
  );
}
