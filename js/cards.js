export function card(celular) {
    let contenedor = document.createElement("div");
    contenedor.innerHTML =
        `<div class="row mb - 5">
                        <div class="col-xl-12" >
                            <div class="media-boxes">
                                <div class="media">
                                    <img src=${celular.fotofront} alt="Image" class="mr-3 container__image ">
                                        <div class="media-body tm-bg-gray">
                                            <div class="tm-description-box">
                                                <h5 class="tm-text-blue"> ${celular.marca} ${celular.modelo} ${celular.color.charAt(0).toUpperCase()}${celular.color.slice(1)}</h5>
                                                <p class="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ullam similique vitae
                                                molestias voluptatum maiores in numquam aut eum soluta voluptas, quaerat voluptates officiis
                                                possimus fugiat odit temporibus. Error, quis!<a href="https://plus.google.com/+tooplate"
                                               target="_parent"></a></p>
                                            </div>
                                        </div>
                                </div>    
                            </div>
                        </div>
                    </div>`;
    padre.appendChild(contenedor);
}
