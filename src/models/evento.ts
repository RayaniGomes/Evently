import { Evento } from "@/interfaces";
import mongoose, { Schema } from "mongoose";

const EventoSchema = new Schema<Evento>({
  name: { type: String, required: true },
  data: { type: String, required: true },
  horario: { type: String, required: true },
  qtd_max_pessoa: { type: Number, required: true },
  tipo_evento: { type: String, required: true },
  descricao: { type: String, required: true },
  local: { type: String, required: true },
  endereco: { type: String, required: true },
  numero: { type: String, required: true },
  bairro: { type: String, required: true },
  cidade: { type: String, required: true },
  uf: { type: String, required: true },
  complemento: { type: String, required: true },
  imagem: { type: String, required: true },
});

export default mongoose.models.Evento ||
  mongoose.model<Evento>("Event", EventoSchema);
