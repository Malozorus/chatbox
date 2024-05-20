import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable, map, of } from 'rxjs';
import { Message, ModelTag, OllamaChatPromptBody, OllamaChatResponseBody, OllamaChatStreamResponseBody, OutputMessage } from '../types';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private apiService: ApiService) { }
  
  authToken: string = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImI5MjUwY2NjLTJiYjItNDVhNC04YTIzLTRkODg1MTNiNTI0MCJ9.z9odvu6mVyXOe-yEESuxnsmZ8ab3ItREuL59_BPRuPA"
  baseUrl = "http://localhost:3000/ollama/api";



  getModels(url: string): Observable<ModelTag[]> {
    return this.apiService.get<{ models: ModelTag[] }>(url, {
      responseType: 'json',
      headers: {
        accept: "application/json",
        Authorization: this.authToken
      }
    }).pipe(
      map(response => response.models) // Utilise l'opérateur `map` pour transformer la réponse
    );
  }

  formatOllamaChatStreamResponseToMessage(response: OllamaChatStreamResponseBody): OutputMessage {
    const outMessage: OutputMessage = {
        done : response.done,
        id: '', // Vous devez peut-être générer un ID unique ici ou récupérer depuis une autre source
        model: response.model,
        role: response.message != undefined ? response.message.role : "assistant",
        content: response.message != undefined ? response.message.content : "",
        images: [], // Remplissez cette propriété si nécessaire
    };
    return outMessage;
}

  // Fonction principale pour envoyer un message et récupérer la réponse
postChat(message: Message, stream: boolean): Observable<any> {
  // Création du corps de la requête pour Ollama
  const ollamaChatPromptBody: OllamaChatPromptBody = {
      model: message.model || "llama3",
      messages: [
          {
              role: "user",
              content: message.content
          }
      ],
      stream: stream
  };

    return this.apiService.post<OutputMessage>(
      this.baseUrl + "/chat",
      ollamaChatPromptBody,
      {
        observe: 'events' as 'body',
        responseType: 'text' as 'json',
        reportProgress: true,
        headers: {
          accept: "application/json",
          Authorization: this.authToken
        }
      })
    } 
}
