
    var a = {
        price:100,
        total:100,
        quantity:1,

    }
    var b = {
        price:200,
        total:200,
        quantity:1,

    }
    var c = {
        price:300,
        total:300,
        quantity:1,

    }


     function increment(d){
        var obj = d === 'obj1' ? a : (d === 'obj2' ? b : c);
         if(obj.quantity < 10) {
           obj.quantity = obj.quantity + 1;
           obj.total = obj.quantity * obj.price;
         }
        document.getElementById(d+'List').innerText = obj.total;
        document.getElementById(d+'Text').value = obj.quantity;

     }
     function decrement(d){
        var obj = d === 'obj1' ? a : (d === 'obj2' ? b : c);
         if(obj.quantity > 0) {
           obj.quantity = obj.quantity - 1;
           obj.total = obj.quantity * obj.price;
         }
        document.getElementById(d+'List').innerText = obj.total;
        document.getElementById(d+'Text').value = obj.quantity;

     }
