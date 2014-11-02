'use strict';


/*

 this.Task_1 - 1 - номер задания

 getRandomInt() - функция с 2я аргументами - от какого числа брать конечное приоизвольное число и второй - до какого
 var a - переменная с именем a - может хранить как числа, строки...
 toFixed() функция принимающая число (1,2,3..) до скольки знаков после запятой округлять
 ~~ число (~~1.09) взять целую часть от числа



 result.text - Задание
 result.answerText - Текст обьясняющий решение
 result.answerNumber - числовой(или же нет) но малый ответ

 Math.pow () функция с 2я аргументами 1-ый какое число 2-й - в какую степень возводить его


 */




/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).service('SolveTaskService', function () {

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


    this.numbersSelected = [];
    this.numbers = 1;  /// how much students
    this.allRsults = [];

    this.Task_1 = function () {
        var result = {};
        result.id = 1;

        var a = getRandomInt(0, 100);
        var b = getRandomInt(0, 100);
        var c = getRandomInt(0, 100);


        result.text = "Обладает   ли    властью   на   рынке   продавец,   если    продаваемая   продукция   приносит   ему    выручку: <br> a)     TR = " + a + " Q  <br> б) TR="+b+"+Q<sup>2</sup> + "+c+"Q  ";
        result.answerText = "  P вычисляется по правилу TR/Q <br> Если Р изменяется в зависимости от Q, то фирма обладает властью, если же P постоянно, то властью фирма не обладает.  ";
        result.answerNumber = "a)нет б)да";

        return result;
    };

    this.Task_2 = function () {
        var result = {};

        result.id = 2;
        var a = getRandomInt(1, 40);
        var b = getRandomInt(1, 70);
        var c = getRandomInt(1, 100);
        var p = getRandomInt(80, 300);

        result.text = "ТС   задается   формулой  " + a + "(Q<sup>2</sup>)+" + b + "Q+" + c + "Найти выпуск фирмы при фиксированной цене P; P=" + p;
        result.answerText = "   Q=(P-B)/2A   ";
        result.answerNumber = ((p - b) / 2 * a).toFixed(1);

        return result;
    };

    this.Task_3 = function () {
        var result = {};

        result.id = 3;

        var a = getRandomInt(1, 40);
        var b = getRandomInt(1, 70);
        var c = getRandomInt(1, 100);
        var p = getRandomInt(80, 300);

        result.text = "ТС  задается  формулой  " + a + "(Q<sup>2</sup>)+" + b + "Q+" + c + "  Найти  Функции   AC   и  MC, <br> а  также  выпуск  (Q)  при  фиксированной  цене  P;  P=" + p;
        result.answerText = " Q=(P-B)/2A   <br>  AC=AQ+B+C/Q <br>  MC=2AQ+B  ";

        //// Answers ////
        var q = ( (p - b) / 2 * a ).toFixed(2);
        result.ac = ( a * q + b + c / q ).toFixed(2);
        result.mc = ( 2 * a * q + b  ).toFixed(2);
        result.q = q;

        result.answerNumber = "AC=" + result.ac + ";" + "MC=" + result.mc + ";" + "Q=" + result.q + ";";


        return result;
    };


    this.Task_4 = function () {
        var result = {};
        result.id = 4;

        var a = getRandomInt(1, 40);
        var b = getRandomInt(1, 70);

        var d = getRandomInt(1, 100);

        var c =(b*b)/(4*a)+d ;
//        c = c.toFixed(1);
   c=   ~~c;
//        c=c.toFixed(1);

        result.text = "ТС  задается  формулой   " + a + "Q<sup>3</sup>-" + b + "Q<sup>2</sup> +" + c + "Q+" + d + " <br> Найти P <br>";
        result.answerText = " Искомая   цена   P=-(B<sup>2</sup>)/4A+C  ";
        result.answerNumber =    ((-1 * (b * b)) / (4*a) + c  ).toFixed(1) ;

        return result;
    };


    this.Task_5 = function () {
        var result = {};

        result.id = 5;

        var price = getRandomInt(1000, 5000);
        var tc0 = getRandomInt(price / 1.4, price / 1.2);

        tc0 = tc0.toFixed(0);

        var tc1 = getRandomInt(tc0 * 1.2, tc0 * 1.5).toFixed(0);
        var tc2 = getRandomInt(tc1 * 1.2, tc1 * 1.5).toFixed(0);
        var tc3 = getRandomInt(tc2 * 1.2, tc2 * 1.5).toFixed(0);
        var tc4 = getRandomInt(tc3 * 1.2, tc3 * 1.5).toFixed(0);
        var tc5 = getRandomInt(tc4 * 1.2, tc4 * 1.5).toFixed(0);
        var tc6 = getRandomInt(tc5 * 1.2, tc5 * 1.5).toFixed(0);


        result.answerText = " Q=(P-B)/2A     AC=AQ+B+C/Q   MC=2AQ+B  ";

        result.textHTML = " <br/> <table class='table table-bordered' width='50%'> <tr>  <td>Выпуск,шт</td> <td> Общие затраты</td></tr>";

        result.textHTML += "<tr><td> 0 </td> <td>" + tc0 + "</td></tr>";
        result.textHTML += "<tr><td> 1 </td> <td>" + tc1 + "</td></tr>";
        result.textHTML += "<tr><td> 2 </td> <td>" + tc2 + "</td></tr>";
        result.textHTML += "<tr><td> 3 </td> <td>" + tc3 + "</td></tr>";
        result.textHTML += "<tr><td> 4 </td> <td>" + tc4 + "</td></tr>";
        result.textHTML += "<tr><td> 5 </td> <td>" + tc5 + "</td></tr>";
        result.textHTML += "<tr><td> 6 </td> <td>" + tc6 + "</td></tr>";

        result.textHTML += "</table>";

        result.textHTML += "Найти оптимальный выпуск Q при заданной цене <br> Цена:" + price + "р";
//////////////////////////////////////////////////////////

        var mc0 = '-';
        var mc1 = tc1 - tc0;
        var mc2 = tc2 - tc1;
        var mc3 = tc3 - tc2;
        var mc4 = tc4 - tc3;
        var mc5 = tc5 - tc4;
        var mc6 = tc6 - tc5;

        var m0 = '-';
        var m1 = price - mc1;
        var m2 = price - mc2;
        var m3 = price - mc3;
        var m4 = price - mc4;
        var m5 = price - mc5;
        var m6 = price - mc6;


        if (m1 > 0) result.answerQ = 1;
        if (m2 > 0) result.answerQ = 2;
        if (m3 > 0) result.answerQ = 3;
        if (m4 > 0) result.answerQ = 4;
        if (m5 > 0) result.answerQ = 5;
        if (m6 > 0) result.answerQ = 6;


        result.answerHTML = "<table class='table table-bordered'> <tr>  <td>Выпуск,шт</td> <td> Общие затраты TC</td> <td> Маржинальные затраты,MC</td>    <td>Маржинальная отдача, MR</td> <td> Маржинальная прибыль M</td>      </tr>";

        result.answerHTML += "<tr><td> 0 </td> <td>" + tc0 + "</td>   <td>" + mc0 + "</td> <td>" + "0" + "</td> <td>" + m0 + "</td>  </tr>";
        result.answerHTML += "<tr><td> 1 </td> <td>" + tc1 + "</td>   <td>" + mc1 + "</td> <td>" + price + "</td> <td>" + m1 + "</td>  </tr>";
        result.answerHTML += "<tr><td> 2 </td> <td>" + tc2 + "</td>   <td>" + mc2 + "</td> <td>" + price + "</td> <td>" + m2 + "</td>  </tr>";
        result.answerHTML += "<tr><td> 3 </td> <td>" + tc3 + "</td>   <td>" + mc3 + "</td> <td>" + price + "</td> <td>" + m3 + "</td>  </tr>";
        result.answerHTML += "<tr><td> 4 </td> <td>" + tc4 + "</td>   <td>" + mc4 + "</td> <td>" + price + "</td> <td>" + m4 + "</td>  </tr>";
        result.answerHTML += "<tr><td> 5 </td> <td>" + tc5 + "</td>   <td>" + mc5 + "</td> <td>" + price + "</td> <td>" + m5 + "</td>  </tr>";
        result.answerHTML += "<tr><td> 6 </td> <td>" + tc6 + "</td>   <td>" + mc6 + "</td> <td>" + price + "</td> <td>" + m6 + "</td>  </tr>";


        result.answerHTML += "</table>";

        result.price = price;
        result.tc0 = tc0;
        result.tc1 = tc1;
        result.tc2 = tc2;
        result.tc3 = tc3;
        result.tc4 = tc4;
        result.tc5 = tc5;
        result.tc6 = tc6;

        result.text = result.textHTML;
        result.answerText = result.answerHTML;
        result.answerNumber = result.answerQ;

        return result;
    };

//
//

    this.Task_6 = function () {
        // 11.21

        var result = {};
        result.id = 6;

        ///  getRandomInt - Функция принимающая 2 целых числа(от какого, до какого) произвольное значение - результат - целое число.

            // var - это переменная универсального типа (int,string...)
        var A = getRandomInt(100, 400);
        var B = getRandomInt(100, 400);
        var C = getRandomInt( (B*B/(4*A))+1 ,(B*B/(4*A))*1.5);
        var P = getRandomInt(500, 1000);


        C = ~~C;   // ~~ - Целая часть от числа

        var ubitok=0;
        if (P <= B) ubitok=-1 * C;
        if (P>B) ubitok = P*(P-B)/(2*A)-((P-B) * (P-B)  )/(   (2*A) * (2*A) )-B*(P-B)/(2*A)-C;

        ubitok= ubitok.toFixed(1);  // toFixed - Это округление до 1 знака после запятой

        var isEnd="";
        if (ubitok > -1 * C )  isEnd="Остается"; else isEnd="Покидает";

        result.text = "ТС  задается  формулой  TC="+ A+"Q<sup>2</sup> + "+B+"Q+"+C + " <br> P=" + P + "<br>Вопросы: <br>1)	Чему будет равна экономическая прибыль(убыток)<br> 2)	Стоит ли фирме покинуть отрасль, если она несет убытки? <br>" ;
        result.answerText = " Если P<="+ B+", то убыток="+C+", Если "+P+">"+B+", то прибыль или убыток считаются по формуле P*(P-B)/(2*A)-((P-B)^2)/((2*A)^2)-B*(P-B)/(2*A)-C <br> Ответ на второй вопрос: Если полученная прибыль(убыток)>-"+C+", то фирма остается в отрасли, иначе она покидает рынок.";
        result.answerNumber = "a)"+ubitok+" б)"+isEnd;

        return result;
    };

////////////////////////////////////////////////////////////////////
    this.Task_7 = function () {
        // 11.32

        var result = {};
        result.id = 7;

        var C = getRandomInt(1, 100);
        var B = getRandomInt(1, 300);
        var P = getRandomInt( B+1 ,  B*1.3 );

        result.text = "ТС  задается  формулой  TC="+ C + "+" +B + "Q <br> Фирма является предельной. Определить максимальный возможный объем выпуска этой фирмы. <br> P=  "+P ;
        result.answerText = "Ответом является целая часть [C/(P-B)] ";
        result.answerNumber = ~~ ( C/(P-B) );

        return result;
    };

    this.Task_8 = function () {
        // 11.35

        var result = {};
        result.id = 8;

        var A = getRandomInt(1, 100);
        var B = getRandomInt(1, 300);
        var C = getRandomInt(  ( B*B/(4*A) +1 )   , ( B*B/(4*A) +1 ) * ( B*B/(4*A) +1 ));

        C= C.toFixed(1);


        var D = getRandomInt(40, 100);
        var E = getRandomInt(40, 100);

//        var P = getRandomInt(400, 1000);

        var Pe = (2*E*A-B)/(2*D*A+1);
        var Qde =100*E-100*D*Pe;

        var Qie=Qde/100;

        Pe=Pe.toFixed(1);
        Qde=Qde.toFixed(1);
        Qie=Qie.toFixed(1);

        result.text = " В отрасли совершенной конкуренции действуют 100 Фирм. Общие издержки каждой фирмы составляют TC="+A+"*Q<sup>2</sup>+"+B+"*Q+"+C+" <br>Отраслевой спрос равен Qd="+100*E + "- "+ 100*D +"*P <br> 1)	Найти равновесное положение на этом рынке в краткосрочном периоде <br>2)	Определить объем производства каждой фирмы.";
        result.answerText = "    Решение:  Pe=(2*E*A+B)/(2*D*A+1)  <br> Qde="+100*E +"-"+100*D+"*Pe <br>Ответ на второй вопрос <br>Qie=Qde/100. ";

        result.answerNumber = "Pe="+Pe+", Qde=" +Qde+", Qde="+ Qde+", Qie="+Qie;

        return result;
    };



    this.Task_9 = function () {
        // 11.34

        var result = {};
        result.id = 9;

        var A = getRandomInt(1, 100);
        var B = getRandomInt(1, 300);

        var C = getRandomInt(  ( B*B/(4*A) +1 )   , ( B*B/(4*A) +1 ) * ( B*B/(4*A) +1 ));
            C= C.toFixed(1);


        var P = getRandomInt( 100 ,  1000 );

//        c = c.toFixed(1);

        result.text = "ТС  задается  формулой  TC="+A+"Q <sup>2</sup> +" +B+ "Q+" +C + " <br>Вопрос: Войдет ли фирма в отрасль? <br> P="+P;
        result.answerText = "Решение:Если P<=B, то убыток=С, Если P>B, то прибыль или убыток считаются по формулеP*(P-B)/(2*A)-((P-B)^2)/((2*A)^2)-B*(P-B)/(2*A)-C <br> Если полученная прибыль(убыток)>-C, то фирма входит  в отрасль, иначе нет.";

        var ubitok;
        if (P<=B) ubitok = -1 * C;
        if (P>B) ubitok = P*(P-B)/(2*A)-((P-B) * (P-B)  )/((2*A) * (2*A))-B*(P-B)/(2*A)-C;

        var isEnter;
        if (ubitok > -C) isEnter="Входит"; else isEnter="Не входит";

        result.answerNumber = isEnter;

        return result;
    };
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
    this.Task_10 = function () {
        // 11.34

        var result = {};
        result.id = 10;

        var C = getRandomInt(1100,2000);
        var B = getRandomInt(10,100);

        var D = getRandomInt(10,100)
        var E = 2 * D *B +getRandomInt(10,100);






        var Qm=2*E-2*B*D;
        var Pm=E/D-2*B;

        Qm=Qm.toFixed(1);
        Pm=Pm.toFixed(1);

        result.text = " Постоянные затраты монополиста составляют "+C+" рублей <br>  Средние переменные затраты постоянны и равны "+B+". Функция спроса задана уравнением Qd="+E+"-"+D+"*P, где P- цена в рублях, Q – количество в тысячах штук. <br>  Найти Qm и Pm  - объем продаж и цену, максимизирующие прибыль монополиста. ";
        result.answerText = "TC=B*Q+C <br> Qm=2*E-2*B*D <br>Pm=E/D-2*B ";
        result.answerNumber = "  Qm=" + Qm +", Pm="+Pm;

        return result;
    };


    this.Task_11 = function () {
        // 11.62

        var result = {};
        result.id = 11;

        var A = getRandomInt(1, 100);
        var P = A;

        var B = getRandomInt(1, 100);
        var C = getRandomInt(1, 100);

        result.text = " В отрасли совершенной конкуренции установилась цена P="+A+"<br>Средние переменные затраты конкурентной фирмы выражены формулой <br> AVC="+A+"+(Q-"+B+")<sup>2</sup>,  а фиксированные затраты = "+C+". Найти оптимальный выпуск фирмы  ";
        result.answerText = "    Решение: Q=B ";
        result.answerNumber = B;

        return result;
    };


    this.Task_12 = function () {
        // 11.71

        var result = {};
        result.id = 12;

        var A = getRandomInt(1, 100);
        var B = getRandomInt(1, 100);
        var C = getRandomInt(1, 100);

        var D =2*A*C+B;

        result.text = " Фирма “Все для Вас» действует на рынке совершенной конкуренции  <br> Зависимость общих затрат фирмы (TC в рублях) от величины выпуска (Q в штуках) описывается выражением TC="+A+"*Q<sup>2</sup>+"+B+"*Q+"+A+"*("+C+" <sup>2</sup>  )  <br> Фирма стремилась получить максимальную прибыль, однако не получила прибыли вообще, хотя и не понесла убытков. Определите, сколько единиц продукции произвела и продала фирма «Все для Вас», а так же цену, по которой фирма продавала свою продукцию, если известно, что средние общие затраты фирмы составили "+D+" рублей. ";
        result.answerText = " D определяется псевдослучайно по формуле D=2*A*C+B,  Q=C, P=D  ";
        result.answerNumber = " Q="+C+", P="+D;

        return result;
    };


    this.Task_13 = function () {
        // 12.2

        var result = {};
        result.id = 13;

        var A = getRandomInt(1, 100);
        var B = getRandomInt(1, 100);
        var C = getRandomInt(1, 100);
        var Qm = A/2;

        var Q,P;

        if (Qm > C) Q=C; else Q=Qm;
        P =  ( (A-Q)/B ).toFixed(1);

        result.text = " Кривая спроса на билеты в театр описывается уравнением Q="+A+"-"+B+"*P, где Q – количество мест, P – цена в рублях. На стадионе C мест. <br>  Какое количество билетов надо продать и какую цену за билет должен назначить директор стадиона, если он ставит целью максимизировать общую выручку?";
        result.answerText = "  Максимальная выручка достигается в точке с единичной эластичностью спроса, т.е Qm=A/2. Если Qm>C, то надо продать Q=C билетов, иначе Q=Qm. Цена составит (A-Q)/B ";
        result.answerNumber = " Q="+Q+", P="+P;

        return result;
    };

    this.Task_14 = function () {
        // 12.5

        var result = {};
        result.id = 14;

        var Po = getRandomInt(1, 100);
        var Qo = getRandomInt(1, 100);

        var Qd = 2*Qo-(Qo/Po).toFixed(1);
        Qd+="P";

        result.text = "  Определите формулу линейной функции спроса на продукцию монополиста, если известно, что он получает максимальную выручку в точке P="+Po+" и Q="+Qo;
        result.answerText = "   Максимальная выручка достигается в точке с единичной эластичностью спроса, <br>Функция спроса линейна, а значит, задается уравнением Qd=a-b*P. Исходя из этого получаем систему уравнений Qo=a/2, Po=a/(2*b). Найденные корни системы являются решением. <br> Qd=2*Qo-(Qo/Po)*P ";
        result.answerNumber = " Qd="+Qd;

        return result;
    };

    this.Task_15 = function () {
        // 12.6

        var result = {};
        result.id = 15;

        var A = getRandomInt(1, 100);
        var D = getRandomInt(1, 100);
        var E = getRandomInt(1, 100);

        var B = getRandomInt( (E/D ) /3, (E/D ) /2).toFixed(1);
        var C = getRandomInt(  ( (B*B)/(4*A)  ) +1 , ( (B*B)/(4*A)  ) * ( (B*B)/(4*A)  ));

        C= C.toFixed(4);


        var Q=(E/D-B)/(2*A+1/D);
        var P=E/D-Q/D;

        result.text = " Найти максимум прибыли монополиста, если известно, что спрос на его продукцию описывается формулой Q="+E+"-"+D+"*P и функция общих затрат равна TC="+C+"+"+B+"*Q+"+A+"*Q<sup>2</sup>";
        result.answerText = "Условием получения максимальной прибыли является MC=TC'=P<br> Получаем из функции спроса P=E/D-Q/D; TC'=2*A+B Приравниваем обе части, получаем  <br> Q=(E/D-B)/(2*A+1/D) Используя полученное Q, находим P по формуле P=E/D-Q/D, максимальная прибыль = P*Q-( C+B*Q+A*Q^2) ";

        result.answerNumber =  (P*Q-( C+B*Q+A*Q^2)  ).toFixed(1);

        return result;
    };

    this.Task_16 = function () {
        // 12.10

        var result = {};
        result.id = 16;

        var A = getRandomInt(1, 100);
        var B = getRandomInt(1, 100);
        var C = getRandomInt(1, 100);

        var Qe = (A/(B+C)  ).toFixed(1);
        var TR =  A+"Q"+-(B/2)+"*(Q^2)";
        var P=TR +"/Q";

//        Qe=Qe.toFixed(1);
//        TR=TR.toFixed(1);
//        P=P.toFixed(1);


        var Pe=A-(B/2)*Qe;

        Pe=Pe.toFixed(1);


        result.text = " Монополия на рынке сталкивается с предельным доходом, определенным функцией MR="+A+"-"+B+"*Q. При этом предельные издержки монополии определены функцией MC="+C+"*Q. <br> Какова цена, которую монополия установит на рынке?            ";
        result.answerText = " Монополист получит максимальную прибыль при MR=MC. Из этого равенства получаем Qe=A/(B+C). Чтобы найти цену, необходимо узнать формулу общей выручки (TR) <br> MR=TR’, следовательно, <br> TR=неопределенный интеграл от (A-B*Q)dQ= AQ-(B/2)*(Q^2)+C <br> TR(0)=0, следовательно, TR= AQ-(B/2)*(Q^2). P=TR/Q, Pe=A-(B/2)*Qe ";
        result.answerNumber =  "TR="+TR+", P=" +P+ ", Pe="+Pe;

        return result;
    };


    this.Task_17 = function () {
        // 12.13

        var result = {};
        result.id = 17;

        var A = getRandomInt(1, 100);
        var B = getRandomInt(1, 100);
        var D = getRandomInt(1, 100);

        var C = getRandomInt(  (A/B) +1  , (A/B) * (A/B));

        var Qe=(C-A/B)/(D+2/B);
        var Pe=A/B-Qe/B;

        C= C.toFixed(1);

        result.text = "  Кривая рыночного спроса на продукцию, производимую монополистом, описывается уравнением Qd="+A+"-"+B+"*P, кривая предельных издержек монополии MC="+C+"+"+D+"*Q <br> Какую цену на свою продукцию установит этот монополист, стремясь максимизировать прибыль? ";
        result.answerText = "   MR=TR’=(P*Q)’=A/B-(2/B)*Q=MC=C+D*Q <br> Получаем Qe=(C-A/B)/(D+2/B)  ";

        result.answerNumber = Pe.toFixed(1);

        return result;
    };


    this.Task_18 = function () {
        // 12.17

        var result = {};
        result.id = 18;

        var A = getRandomInt(1, 100);
        var B = getRandomInt(1, 100);
        var C = getRandomInt(1, 100);

       var Qe=A/(C+2*B);
       var Pe=A-B*Qe;
       var E=(-B)*(Pe/Qe);

        result.text = "  Функция спроса на продукцию монополиста P="+A+"-"+B+"*Q, MC=AC="+C+" <br> Найти эластичность спроса по цене, если монополист ищет максимум прибыли ";
        result.answerText = "  MR=A-2*B*Q=MC=C <br> Qe=A/(C+2*B) <br> Pe=A-B*Qe <br> E=(-B)*(Pe/Qe) ";

        result.answerNumber = E.toFixed(1);

        return result;
    };


    this.Task_19 = function () {
        // 12.18

        var result = {};
        result.id = 19;

        var A = getRandomInt(10, 100);
        var B = getRandomInt(A/3, A/2).toFixed(0);
        var C =  ( Math.pow(getRandomInt(0.1, 0.9), 2 )  ).toFixed(4);



        result.text = "   Даны функция спроса на продукцию монополиста Q="+A+"-P и функция средних переменных затрат AVC="+B+"+"+C+"*Q <br> Вычислить монопольный выпуск, обеспечивающий максимум прибыли.    ";
        result.answerText = "   Исходя из формулы средних переменных издержек, получим формулы TC=B*Q+C*Q^2+FC и MC=TC’=B+2*C*Q, т.к FC=const  MR=(P*Q)'=A-2*Q <br> MR=MC -> B+2*C*Q=A-2*Q Получаем Q=(B-A)/(2*C+2) полученное чилсло Q является ответом. ";

        result.answerNumber =  ((A-B)/( 2*C+2)  ).toFixed(1) ;

        return result;
    };


    this.Task_20 = function () {
        // 12.19

        var result = {};
        result.id = 20;

        var A = getRandomInt(10, 100);
        var B = getRandomInt(A/3, A/2) * A;
//        var D = getRandomInt(-300, -100);



        var C =  ( Math.pow(2, getRandomInt(4, 6) )  ) /100;


        var Qm=(B-A)/(2*C+2);

        var DDD = Qm*(A-Qm)-( B+C*Qm)*Qm;
        var D =  DDD - getRandomInt(10,100);

        var FC =Qm*(A-Qm)-( B+C*Qm)*Qm-D;



        D= D.toFixed(1);

        B= B.toFixed(1);

        result.text = " Даны функция спроса на продукцию монополиста Q="+A+"-P и функция средних переменных затрат AVC="+B+"+"+C+"*Q <br> Известно, что максимум прибыли монополиста равен " +D+". Найти фиксированные затраты.  ";
        result.answerText = "  Исходя из формулы средних переменных издержек, получим формулы TC=B*Q+C*Q^2+FC и MC=TC’=B+2*C*Q, т.к FC=const  MR=(P*Q)'=A-2*Q <br> MR=MC -> B+2*C*Q=A-2*Q Получаем Qm=(B-A)/(2*C+2) <br> Найдем максимальную прибыль П=TR-VC-FC -> <br> FC=TR-VC-П=Qm*(A-Qm)-( B+C*Qm)*Qm-D ";

        result.answerNumber =  FC.toFixed(1) ;

        return result;
    };



});
