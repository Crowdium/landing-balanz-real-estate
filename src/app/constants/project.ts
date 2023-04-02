export interface Project {
    Abreviatura: string;
    AceptandoInversiones: number;
    AceptandoRescates: number;
    CodProyecto: number;
    Completado: number;
    Descripcion: string | InnerHTML;
    Estado: {
        Tipo: number;
        Descripcion: string;
    };
    FechaFinSuscripcion: string;
    FechaInicioSuscripcion: string;
    FechaRetorno: string;
    FormasDeSuscripcion: [];
    Geo: {
        lat: string;
        lng: string;
    };
    Imagen: string;
    ImagenOrientacion: string;
    Logo: string;
    Moneda: string;
    Nombre: string;
    Plazo: string;
    RentabilidadEstimada: string;
    Slug: string;
    Tipo: string;
    TirEstimada: string;
    Ubicacion: string;
}
export interface ProjectError {}
