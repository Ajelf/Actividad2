let n = 99;

switch (true) {
    case 90 <= n && n<=100:
        console.log ('LETRA A');
        break;
    case 80<= n && n<=89: 
        console.log ('LETRA B');
        break;
    case 70 <= n && n<=79:
        console.log ('LETRA C');
        break;
    case 60 <= n && n<=69:
        console.log ('LETRA D');
        break;
    default:
        console.log ('LETRA F');
        break;
}