import {create} from "zustand"

export const useProductStore = create((set) => ({
    productos: [],
    setProductos: (productos) => set({ productos }),
    crearProducto: async (nuevoProducto) => {
        if(!nuevoProducto.nombre || !nuevoProducto.precio || !nuevoProducto.imagen){
            return {success:false, message:"Por favor, llena todos los campos"}
        }
        const res = await fetch("http://localhost:5000/api/productos/", {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(nuevoProducto)
        });

        if(!res.ok) {
            const errorMessage = await res.text();
            return { success: false, message: `Error: ${errorMessage}` };
        }

        const data = await res.json();

        set((state) =>  ({productos:[...state.productos, data.data]}))   
        return { success: true, message: "Producto creado correctamente"};
    },
    traerProductos: async() => {
        const res = await fetch("http://localhost:5000/api/productos");
        const data = await res.json();
        set({productos: data.data});
    },
    borrarProducto: async(idProd) => {
        const res = await fetch(`http://localhost:5000/api/productos/${idProd}`, {
            method: "DELETE",
        });
        const data = await res.json();
        if (!data.success) return {success: false, message: data.message}
        set(state => ({productos: state.productos.filter(producto => producto._id !== idProd)}));
        return {success: true, message: data.message};
    },
    actualizarProducto: async(idProd, productoActualizado) => {
        const res = await fetch(`http://localhost:5000/api/productos/${idProd}`, {
            method: "PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(productoActualizado)
        });
        const data = await res.json();

        if(!data) return {success: false, message: data.message};
        set (state => ({
            productos: state.productos.map(producto => producto._id === idProd ? data.data : producto)
        }));
        return {success: true, message: data.message};
    }
}))
