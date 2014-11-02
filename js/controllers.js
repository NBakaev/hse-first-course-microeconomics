'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
    .controller('MyCtrl1', ['$scope', '$sce', 'SolveTaskService', function ($scope, $sce, SolveTaskService) {

        $scope.to_trusted = function (html_code) {
            return $sce.trustAsHtml(html_code);
        };

        $scope.thisTask = SolveTaskService.Task_1();

        $scope.id = $scope.thisTask.id;
        $scope.text = $scope.thisTask.text;
        $scope.answerText = $scope.thisTask.answerText;
        $scope.answerNumber = $scope.thisTask.answerNumber;


    }])
    .controller('MyCtrl2', ['$scope', '$sce', 'SolveTaskService', function ($scope, $sce, SolveTaskService) {

        // 119
        $scope.to_trusted = function (html_code) {
            return $sce.trustAsHtml(html_code);
        };

        $scope.thisTask = SolveTaskService.Task_2();

        $scope.id = $scope.thisTask.id;
        $scope.text = $scope.thisTask.text;
        $scope.answerText = $scope.thisTask.answerText;
        $scope.answerNumber = $scope.thisTask.answerNumber;

    }])
    .controller('MyCtrl3', ['$scope', '$sce', 'SolveTaskService', function ($scope, $sce, SolveTaskService) {
        // 1112
        $scope.to_trusted = function (html_code) {
            return $sce.trustAsHtml(html_code);
        };


        $scope.thisTask = SolveTaskService.Task_3();


        $scope.id = $scope.thisTask.id;

        $scope.text = $scope.thisTask.text;
        $scope.answerText = $scope.thisTask.answerText;

        //// Answers ////
        $scope.ac = $scope.thisTask.ac;
        $scope.mc = $scope.thisTask.mc;
        $scope.q = $scope.thisTask.q;

    }])

    /////////////////////////////////////////        //////////////////////////
    .controller('MyCtrl4', ['$scope', '$sce', 'SolveTaskService', function ($scope, $sce, SolveTaskService) {
        // 1113
        $scope.to_trusted = function (html_code) {
            return $sce.trustAsHtml(html_code);
        };

        $scope.thisTask = SolveTaskService.Task_4();

        $scope.id = $scope.thisTask.id;
        $scope.text = $scope.thisTask.text;
        $scope.answerText = $scope.thisTask.answerText;
        $scope.answerNumber = $scope.thisTask.answerNumber;

    }])
    .controller('MyCtrl5', ['$scope', '$sce', 'SolveTaskService', function ($scope, $sce, SolveTaskService) {
        // 11б
        $scope.to_trusted = function (html_code) {
            return $sce.trustAsHtml(html_code);
        };


        $scope.thisTask = SolveTaskService.Task_5();


        $scope.id = $scope.thisTask.id;
//        $scope.text = $scope.thisTask.text;
        $scope.answerText = $scope.thisTask.answerText;
        $scope.answerNumber = $scope.thisTask.answerQ;
        $scope.answerText = $scope.thisTask.answerHTML;
        $scope.text = $scope.thisTask.textHTML;

    }])

    .controller('MyCtrl6', ['$scope', '$sce', 'SolveTaskService', function ($scope, $sce, SolveTaskService) {
        // 1113
        $scope.to_trusted = function (html_code) {
            return $sce.trustAsHtml(html_code);
        };

        $scope.thisTask = SolveTaskService.Task_6();

        $scope.id = $scope.thisTask.id;
        $scope.text = $scope.thisTask.text;
        $scope.answerText = $scope.thisTask.answerText;
        $scope.answerNumber = $scope.thisTask.answerNumber;

    }])

    .controller('MyCtrl7', ['$scope', '$sce', 'SolveTaskService', function ($scope, $sce, SolveTaskService) {
        // 1113
        $scope.to_trusted = function (html_code) {
            return $sce.trustAsHtml(html_code);
        };

        $scope.thisTask = SolveTaskService.Task_7();

        $scope.id = $scope.thisTask.id;
        $scope.text = $scope.thisTask.text;
        $scope.answerText = $scope.thisTask.answerText;
        $scope.answerNumber = $scope.thisTask.answerNumber;

    }])

    .controller('MyCtrl8', ['$scope', '$sce', 'SolveTaskService', function ($scope, $sce, SolveTaskService) {
        // 1113
        $scope.to_trusted = function (html_code) {
            return $sce.trustAsHtml(html_code);
        };

        $scope.thisTask = SolveTaskService.Task_8();

        $scope.id = $scope.thisTask.id;
        $scope.text = $scope.thisTask.text;
        $scope.answerText = $scope.thisTask.answerText;
        $scope.answerNumber = $scope.thisTask.answerNumber;

    }])

    .controller('MyCtrl9', ['$scope', '$sce', 'SolveTaskService', function ($scope, $sce, SolveTaskService) {
        // 1113
        $scope.to_trusted = function (html_code) {
            return $sce.trustAsHtml(html_code);
        };

        $scope.thisTask = SolveTaskService.Task_9();

        $scope.id = $scope.thisTask.id;
        $scope.text = $scope.thisTask.text;
        $scope.answerText = $scope.thisTask.answerText;
        $scope.answerNumber = $scope.thisTask.answerNumber;

    }])

    .controller('MyCtrl10', ['$scope', '$sce', 'SolveTaskService', function ($scope, $sce, SolveTaskService) {
        // 1113
        $scope.to_trusted = function (html_code) {
            return $sce.trustAsHtml(html_code);
        };

        $scope.thisTask = SolveTaskService.Task_10();

        $scope.id = $scope.thisTask.id;
        $scope.text = $scope.thisTask.text;
        $scope.answerText = $scope.thisTask.answerText;
        $scope.answerNumber = $scope.thisTask.answerNumber;

    }])

    .controller('MyCtrl11', ['$scope', '$sce', 'SolveTaskService', function ($scope, $sce, SolveTaskService) {
        // 1113
        $scope.to_trusted = function (html_code) {
            return $sce.trustAsHtml(html_code);
        };

        $scope.thisTask = SolveTaskService.Task_11();

        $scope.id = $scope.thisTask.id;
        $scope.text = $scope.thisTask.text;
        $scope.answerText = $scope.thisTask.answerText;
        $scope.answerNumber = $scope.thisTask.answerNumber;

    }])

    .controller('MyCtrl12', ['$scope', '$sce', 'SolveTaskService', function ($scope, $sce, SolveTaskService) {
        // 1113
        $scope.to_trusted = function (html_code) {
            return $sce.trustAsHtml(html_code);
        };

        $scope.thisTask = SolveTaskService.Task_12();

        $scope.id = $scope.thisTask.id;
        $scope.text = $scope.thisTask.text;
        $scope.answerText = $scope.thisTask.answerText;
        $scope.answerNumber = $scope.thisTask.answerNumber;

    }])

    .controller('MyCtrl13', ['$scope', '$sce', 'SolveTaskService', function ($scope, $sce, SolveTaskService) {
        // 1113
        $scope.to_trusted = function (html_code) {
            return $sce.trustAsHtml(html_code);
        };

        $scope.thisTask = SolveTaskService.Task_13();

        $scope.id = $scope.thisTask.id;
        $scope.text = $scope.thisTask.text;
        $scope.answerText = $scope.thisTask.answerText;
        $scope.answerNumber = $scope.thisTask.answerNumber;

    }])

    .controller('MyCtrl14', ['$scope', '$sce', 'SolveTaskService', function ($scope, $sce, SolveTaskService) {
        // 1113
        $scope.to_trusted = function (html_code) {
            return $sce.trustAsHtml(html_code);
        };

        $scope.thisTask = SolveTaskService.Task_14();

        $scope.id = $scope.thisTask.id;
        $scope.text = $scope.thisTask.text;
        $scope.answerText = $scope.thisTask.answerText;
        $scope.answerNumber = $scope.thisTask.answerNumber;

    }])

    .controller('MyCtrl15', ['$scope', '$sce', 'SolveTaskService', function ($scope, $sce, SolveTaskService) {
        // 1113
        $scope.to_trusted = function (html_code) {
            return $sce.trustAsHtml(html_code);
        };

        $scope.thisTask = SolveTaskService.Task_15();

        $scope.id = $scope.thisTask.id;
        $scope.text = $scope.thisTask.text;
        $scope.answerText = $scope.thisTask.answerText;
        $scope.answerNumber = $scope.thisTask.answerNumber;

    }])

    .controller('MyCtrl16', ['$scope', '$sce', 'SolveTaskService', function ($scope, $sce, SolveTaskService) {
        // 1113
        $scope.to_trusted = function (html_code) {
            return $sce.trustAsHtml(html_code);
        };

        $scope.thisTask = SolveTaskService.Task_16();

        $scope.id = $scope.thisTask.id;
        $scope.text = $scope.thisTask.text;
        $scope.answerText = $scope.thisTask.answerText;
        $scope.answerNumber = $scope.thisTask.answerNumber;

    }])

    .controller('MyCtrl17', ['$scope', '$sce', 'SolveTaskService', function ($scope, $sce, SolveTaskService) {
        // 1113
        $scope.to_trusted = function (html_code) {
            return $sce.trustAsHtml(html_code);
        };

        $scope.thisTask = SolveTaskService.Task_17();

        $scope.id = $scope.thisTask.id;
        $scope.text = $scope.thisTask.text;
        $scope.answerText = $scope.thisTask.answerText;
        $scope.answerNumber = $scope.thisTask.answerNumber;

    }])

    .controller('MyCtrl18', ['$scope', '$sce', 'SolveTaskService', function ($scope, $sce, SolveTaskService) {
        // 1113
        $scope.to_trusted = function (html_code) {
            return $sce.trustAsHtml(html_code);
        };

        $scope.thisTask = SolveTaskService.Task_18();

        $scope.id = $scope.thisTask.id;
        $scope.text = $scope.thisTask.text;
        $scope.answerText = $scope.thisTask.answerText;
        $scope.answerNumber = $scope.thisTask.answerNumber;

    }])

    .controller('MyCtrl19', ['$scope', '$sce', 'SolveTaskService', function ($scope, $sce, SolveTaskService) {
        // 1113
        $scope.to_trusted = function (html_code) {
            return $sce.trustAsHtml(html_code);
        };

        $scope.thisTask = SolveTaskService.Task_19();

        $scope.id = $scope.thisTask.id;
        $scope.text = $scope.thisTask.text;
        $scope.answerText = $scope.thisTask.answerText;
        $scope.answerNumber = $scope.thisTask.answerNumber;

    }])

    .controller('MyCtrl20', ['$scope', '$sce', 'SolveTaskService', function ($scope, $sce, SolveTaskService) {
        // 1113
        $scope.to_trusted = function (html_code) {
            return $sce.trustAsHtml(html_code);
        };

        $scope.thisTask = SolveTaskService.Task_20();

        $scope.id = $scope.thisTask.id;
        $scope.text = $scope.thisTask.text;
        $scope.answerText = $scope.thisTask.answerText;
        $scope.answerNumber = $scope.thisTask.answerNumber;

    }])

/////////////////////////////////////////
    .controller('printAllTaskCtrl', ['$scope', '$sce', 'SolveTaskService', function ($scope, $sce, SolveTaskService) {
        $scope.to_trusted = function (html_code) {
            return $sce.trustAsHtml(html_code);
//            return html_code;
        };

//        $("#400").hide();

        $scope.numbersSelected = SolveTaskService.numbersSelected;
        $scope.numbers = SolveTaskService.numbers;


        $scope.allRsults = SolveTaskService.allRsults;


        $scope.numbersSelectedLength = SolveTaskService.numbersSelected.length;

        $scope.addTask = function (number) {
            $scope.numbersSelected.push(number);

            $("#" + number).removeClass("btn-success").addClass("btn-warning");
            console.log("Тыкнуты кнопка" + $scope.numbersSelected);

//            $("#500").hide();
//            $("#400").show();
            $("#400").removeAttr("disabled");

        };

        $scope.setNumbers = function () {
            SolveTaskService.numbers = $scope.numbers;

        };


        console.log("numbersSelected" + $scope.numbersSelected);
        console.log("numbers" + $scope.numbers);


        for (var i = 0; i < SolveTaskService.numbers; i++) {
            if (i == 0) {
                $scope.allRsults.length = 0;
            }

//            $scope.allRsults.push("Вариант №: "+ i+1);


            for (var j = 0; j < $scope.numbersSelected.length; j++) {
//                $scope.allRsults.push(eval("SolveTaskService.Task_" + $scope.numbersSelected[j] + "()").text.replace("<script type='math/tex'>","").replace("</script>","")  );
//                $scope.allRsults.push("Задание №: "+ j+1);

                var a = eval("SolveTaskService.Task_" + $scope.numbersSelected[j] + "()");
//                            a.tempNum = j;

//                console.log ("Temp num" + a.tempNum);

                $scope.allRsults.push(a);


//           $scope.allRsults.push(SolveTaskService.Task_4());
            }
        }

//        console.log ("temp num" + $scope.allRsults[$scope.allRsults.length-1].tempNum);

        console.log("allRsults" + $scope.allRsults);
        console.log("allRsults len" + $scope.allRsults.length);


        $scope.tempWhatIstaskNumber = 1;
        $scope.tempWhatIstaskNumberNow = 0;

        $scope.whatIsTaskNumber = function () {


            if ($scope.tempWhatIstaskNumberNow % $scope.numbersSelected.length == 0) {
                $scope.tempWhatIstaskNumberNow = 1;
            } else {
                $scope.tempWhatIstaskNumberNow++;

            }
//
//            $scope.tempWhatIstaskNumber++;
//
//            if ($scope.tempWhatIstaskNumber ==2) $scope.tempWhatIstaskNumberNow--;

            return $scope.tempWhatIstaskNumberNow;
        }


        var outFoo = function () {

            var bo = "";

            $scope.tempBig = 0;
            $scope.tempVariant = 0;

            for (var i = 0; i < $scope.allRsults.length; i++) {
//                $scope.tempBig++;

                if ((i  ) % $scope.numbersSelected.length == 0) {
                    $scope.tempVariant++;
                    bo += " " + "<br><br> <h3>Вариант: " + $scope.tempVariant + "</h3><br>";
                }
                bo += "<b>"+$scope.whatIsTaskNumber() + ") </b> " + $scope.allRsults[i].text + "<br>";
            }
            return bo;
        };

        $scope.bigOutput = outFoo();


        var outFoo2 = function () {

            var bo = "";

            $scope.tempBig2 = 0;
            $scope.tempVariant2 = 0;

            for (var i = 0; i < $scope.allRsults.length; i++) {

                if (i == 0) {
                    bo += "<table class='table table-bordered'>  <tr>  <td> Вариант: </td>";

                    for (var b = 0; b < $scope.numbersSelected.length; b++) {

                        var c = b + 1;
                        bo += "<td>" + c + "</td>";
                    }

                }

                if ((i  ) % $scope.numbersSelected.length == 0) {
                    $scope.tempVariant2++;
                    bo += " </tr> <tr>  <td>" + $scope.tempVariant2 + " </td> ";
                }
                bo += "<td>" + $scope.allRsults[i].answerNumber + " </td> ";
            }

            bo += "</tr> </table>";

            return bo;
        };

        $scope.bigOutput2 = outFoo2();


    }])
;
