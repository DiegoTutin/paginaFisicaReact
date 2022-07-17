import React from 'react';

  class Calcular extends React.Component {
    state = {
      list: [],
      distancia: '',
      tiempo: '',
      tot: ''
    };
    handleInputChange = event => {
      const { target } = event;
      const { name, value } = target;

      this.setState({
        [name]: value
      });
    };
    handleClean =  event => {
      const { distancia, tiempo, list } = this.state;
      if (distancia && tiempo) {
        // En los states se agrega un nuevo objeto a "list"
        // y se reinicia el estado de tour, pax y price
        this.setState({
          list: [...list, {  distancia, tiempo}],

          distancia: '',
          tiempo: ''

        });
      } else {
        // Si alguno de los inputs se encuentra vacio
        // se mostrará el siguiente mensaje en la consola del navegador
        console.log('Completar los campos para ejecutar');
      }
    event.preventDefault();
    };
    // Esta función se ejecutará al momento de darle click al botón de "Agregar"
    handleSubmit = event => {
      const { distancia, tiempo, list } = this.state;
      
      // Simple validación para que tour, pax y price sean campos requeridos
      if (distancia && tiempo) {
        const id = list.length + 1;
        const tot = distancia / tiempo;
        // En los states se agrega un nuevo objeto a "list"
        // y se reinicia el estado de tour, pax y price
        this.setState({
          list: [...list, { id, distancia, tiempo, tot }],

          distancia: '',
          tiempo: ''

        });
      } else {
        // Si alguno de los inputs se encuentra vacio
        // se mostrará el siguiente mensaje en la consola del navegador
        console.log('Completar los campos para ejecutar');
      }
      event.preventDefault();
    };
    render() {
      const { distancia, tiempo, list } = this.state;
      return (
        <div className="App">
          <div
            class="bg-clip-border p-6 bg-gradient-to-r from-cyan-500 to-blue-500 border-4 border-violet-300 border-dashed">
            <div class="flex justify-center my-2 mx-4 md:mx-0  items-center " >
              <form onSubmit={this.handleSubmit} className="form_tours" class="w-full max-w-xl bg-white rounded-lg shadow-md p-6">
                <div class="text-center text-2xl font-extrabold py-2">
                  <div class="text-center mt-24">
                    <h2 class="text-4xl tracking-tight">
                      Calculadora Básica de Física
                    </h2>
                  </div>
                  <br>
                  </br>
                  <div class="flex justify-center my-2 mx-4 md:mx-0 ">

                    <div class="">
                      <div htmlFor="distancia" class="w-full md:w-full px-3 mb-6">
                        <label
                          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          placeholder="0">Ingrese la distancia en metros </label>
                        <input
                          className="form-control" class="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                          id="distancia" name="distancia" type='number' placeholder="0" value={distancia} onChange={this.handleInputChange} required />
                      </div>
                      <div htmlFor="tiempo" class="w-full md:w-full px-3 mb-6">
                        <label
                          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        >Ingrese el tiempo en segundos</label>
                        <input
                          className="form-control" class="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                          id="tiempo" name="tiempo" type='number' placeholder="0" value={tiempo} onChange={this.handleInputChange} required />
                      </div>

                      <div class="w-full md:w-full ">
                        <button type="submit"
                          class="appearance-none block w-full bg-blue-600 text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-blue-500 focus:outline-none focus:bg-white focus:border-gray-500" >CALCULAR</button>
                      </div>
                      <form onSubmit={this.handleClean}>
                      <div class="w-full md:w-full ">
                        <button id="limpiar" type= "submit"
                          class="appearance-none block w-full bg-red-600 text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-red-500 focus:outline-none focus:bg-white focus:border-gray-500" >LIMPIAR</button>
                      </div>
                      </form>

                      <br>
                      </br>
                      <br>
                      </br>
                      <br>
                      </br>
                    </div>


                  </div>

                </div>
              </form>
            </div>


            <div class="flex flex-col">
              <div class=" overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                  <div class="overflow-hidden">
                    <table class="min-w-full text-center" id="tabla">
                      <thead class="border-b">
                        <tr>
                          <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
                            Velocidad
                          </th>
                          <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
                            Distancia
                          </th>
                          <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
                            Tiempo
                          </th>
                        </tr>
                      </thead>
                      <tbody id="aux" class="border-b">
                          {list.map(item => (
                            <tr key={item.id}>
                              <td>{item.tot}</td>
                              <td>{item.distancia}</td>
                              <td>{item.tiempo}</td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      );
    }
  }
export default Calcular;
