export default function totalPrice(p){
    let total = 0;
    try {
        p.forEach(item => {
           total = total + item.price*item.amount; 
        });
        return total;
    } catch (error) {
        return 0;
    }
}