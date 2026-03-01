import { tenisArr } from "../data-tenis.js";
import { renderTenis } from "../js/main.js";

renderTenis(tenisArr.filter(({categorias}) => categorias.includes("Esportivo")));