import {Filme} from './Filme.js';


const filme1 = new Filme("Que horas ela volta", 2014, "Guilherme filmes");
const filme2 = new Filme("Piratas do vale do Silicio", 1996, "Mac");


filme1.locar();
filme1.locar();
filme1.devolver();
filme1.devolver();
filme1.locar();
filme2.locar();
filme2.devolver();
filme1.devolver();