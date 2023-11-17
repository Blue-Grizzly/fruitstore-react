export default function totalItems(p){
    let total = 0;
    p.forEach(item => {
        total = total + 1*item.amount;            
    });
    return total;
}