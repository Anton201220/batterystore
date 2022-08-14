import firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";

export default {

    actions: {

        async fetchProductById (ctx, id) {
            const product = await firebase.database().ref(`Battery/${id}`).get()
            //console.log(product);
            ctx.commit("setProduct", {id: product.key, ...product.val()})  
            return {id: product.id, ...product.val()}
        }, 

    
        getDataFromDb(ctx) { 
         const data = [];
         ctx.commit('setFiltered', data);
         ctx.commit('updateProducts', data);
         
         const detailRequestRef = firebase.database().ref('Battery');
         detailRequestRef.on('value', function(snapshot){
         //   console.log(snapshot);
            
        snapshot.forEach(function(child) {
        
        const key=child.key;
        const detailRequestData = child.val();
        // console.log(key); 
        data.push({id: key, ...detailRequestData}); 
        });
        
        ctx.commit('updateProducts',data);
        ctx.commit('setFiltered',data);
        })
    },


     getOrders(ctx) {

        console.log('Start read orders')
        const data = []
        
        const db = firebase.firestore().collection('orders')
        db.get().then((querySnapshot) => 
            querySnapshot.docs.map((doc) => (
                data.push ({ id: doc.id, ...doc.data() })
        )))
        ctx.commit('setOrders', data)
    },


   filterProducts({commit,state},value){
            
            if(value!=='All') 
            var  result = state.filtereProducts.filter(function(v) {
                return v.capacity === value
            })
        
            else {
                result = state.filtereProducts
            }
           // console.log(result)
            commit('updateProducts', result)
            }
    },

    mutations: {
        
        updateProducts(state, data) {
            state.products = data
        }, 
       
        setFiltered(s, v) {
            s.filtereProducts = v
        }, 

        setOrders(s, v) {
            s.orders = v
        }, 
        
        setProduct(state, data){
          //  console.log("Newproduct", data);
            state.product = data
        }, 
        
        clearFilterProduct(state, val) {
            state.filterProducts = [...state.products];
        },
        
        clearProducts(state) {
            state.products.clear();
            state.filtereProducts.clear();
        }
    },

    state:{
        product: '',
        products:[],
        filtereProducts: [],
        orders: []
    },

    getters: {
        
        allProducts(state){
        return state.products;
        },

        getFilteredProducts(s) {
            return s.filterProduct;
        },

        getOneProduct(s) {
            return s.product
        },

        getCount(s){return s.products.length},

        allOrders(state) {
            return state.orders;
            },
    

        getOrdersCount(s){return s.orders.length}
    }
}