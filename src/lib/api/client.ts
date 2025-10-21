/**
 * Base API client with error handling and configuration
 */

export interface ApiError {
  message: string;
  status?: number;
  details?: unknown;
}

export class ApiClient {
  constructor(private baseUrl: string) {}

  private async handleResponse<T>(response: Response): Promise<T> {
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw {
        message:
          errorData.detail ||
          errorData.message ||
          `Request failed with status ${response.status}`,
        status: response.status,
        details: errorData,
      } as ApiError;
    }

    // Handle empty responses
    const text = await response.text();
    if (!text) {
      return {} as T;
    }

    try {
      return JSON.parse(text) as T;
    } catch {
      return text as unknown as T;
    }
  }

  async get<T>(endpoint: string): Promise<T> {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return this.handleResponse<T>(response);
  }

  async post<T>(endpoint: string, data?: unknown): Promise<T> {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data ? JSON.stringify(data) : undefined,
    });
    return this.handleResponse<T>(response);
  }

  async postFormData<T>(endpoint: string, formData: FormData): Promise<T> {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      method: "POST",
      body: formData,
    });
    return this.handleResponse<T>(response);
  }

  async delete<T>(endpoint: string, data?: unknown): Promise<T> {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: data ? JSON.stringify(data) : undefined,
    });
    return this.handleResponse<T>(response);
  }

  async getBlob(endpoint: string): Promise<Blob> {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      method: "GET",
    });
    if (!response.ok) {
      throw {
        message: `Request failed with status ${response.status}`,
        status: response.status,
      } as ApiError;
    }
    return response.blob();
  }

  getUrl(endpoint: string): string {
    return `${this.baseUrl}${endpoint}`;
  }
}
