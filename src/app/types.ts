import { HttpContext, HttpHeaders, HttpParams } from "@angular/common/http";

export interface Options {
    headers?: HttpHeaders | {
        [header: string]: string | string[];
    };
    observe?: 'body';
    context?: HttpContext;
    params?: HttpParams | {
        [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
    };
    reportProgress?: boolean;
    responseType: 'json';
    withCredentials?: boolean;
    transferCache?: {
        includeHeaders?: string[];
    } | boolean;
}

export interface Status {
    status: boolean;
}

export interface ModelTag {
    name: string;
    model: string;
    modified_at: Date;
    size: number;
    digest: string;
    details: {
      parent_model: string;
      format: string;
      family: string;
      families: string[];
      parameter_size: string;
      quantization_level: string;
    },
    urls: string[];
  }

export interface PaginationParams {
    [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
    page: number;
    pageSize: number;
}

export interface OllamaChatPromptBody {
    model: string;
    messages: [
        {
        role: string;
        content: string;
        images?: [
            string
            ]
        }
    ];
    format?: string,
    options?: {},
    template?: string,
    stream?: boolean,
    keep_alive?: boolean
}

export interface OllamaChatResponseBody {
        model: string;
        created_at: Date;
        message: {
          role: string;
          content: string;
        },
        done?: boolean;
        total_duration?: number;
        load_duration?: number;
        prompt_eval_count?: number;
        prompt_eval_duration?: number;
        eval_count?: number;
        eval_duration?:number;
      }


export interface OllamaChatStreamResponseBody {
        done: boolean;
        id?: string;
        model?: string;
        created_at?: Date;
        message?: {
          role: string;
          content: string;
        },
        done_reason?: string;
        total_duration?: number;
        load_duration?: number;
        prompt_eval_count?: number;
        prompt_eval_duration?: number;
        eval_count?: number;
        eval_duration?:number;
    }

export interface Message {
    id: string;
    model?: string;
    role: string;
    content: string;
    images?: string[];
    childIds?: string[];
    loading?: Boolean;
}

export interface OutputMessage {
    id?: string | '';
    model?: string | '';
    role?: string | 'assistant';
    content?: string | '';
    images?: string[];
    done: boolean | false;
}


export interface History {
    id: string;
    messages: Message[];
}

