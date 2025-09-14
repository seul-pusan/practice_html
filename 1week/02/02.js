const Hello = (n) => {
    if (n == '1') alert("안녕하세요");
    else alert('Hello');

    console.log('hello test.');
}

const CheckVar = () => {

    let x;
    x= 'test';

    const y='20';

    console.log(`x=${typeof(x)}, y=${typeof(y)}`)
    console.log(`문자열 ${x}은 문자인가요? ${isNaN(x)? '예':'아니오'}`);
    console.log(`문자열 ${y}은 문자열인가요? ${isNaN(y)? '예':'아니오'}`);
}