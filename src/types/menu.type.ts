import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { TipoMenu } from "../enum/TipoMenu.enum";
import { IconDefinition } from "@fortawesome/free-regular-svg-icons";

export type Menu = {
    id:number;
    nome:string;
    codigo:string;
    tipo:TipoMenu;
    rota?:string;
    icone:IconDefinition;
    submenu?:Menu[]
}