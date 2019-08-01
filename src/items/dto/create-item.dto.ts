export interface CreateItemDto extends Document {
    readonly id: string;
    readonly nombre: string;
    readonly descripcion: string;
    readonly precio: string;
    readonly cantidadStock: string
}