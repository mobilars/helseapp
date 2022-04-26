<script>
    import { onMount } from 'svelte';
    import Chart from 'chart.js/auto/auto.js';
    import ecgData from './spirareecg-real.json';
    import patient from '$lib/patient';
    import '../../app.css';
   //$patient.name = '';
    
    let numberOfDataPoints = ecgData.AnnotatedECG.component.series.component.sequenceSet.component[1].sequence.value.digits.length;
    var graphDataY = [numberOfDataPoints];
    for (let i = 0; i < numberOfDataPoints; i++) {
        graphDataY[i] = i*0.002;
    }

    let portfolio;
    
    onMount(()=> {

        let ctx = [{},{},{},{},{},{},{},{},{},{},{},{}];
        let myChart = [{},{},{},{},{},{},{},{},{},{},{},{}];

        ctx[0] = document.getElementById('my1');
        ctx[1] = document.getElementById('my2');
        ctx[2] = document.getElementById('my3');
        ctx[3] = document.getElementById('my4');
        ctx[4] = document.getElementById('my5');
        ctx[5] = document.getElementById('my6');
        ctx[6] = document.getElementById('my7');
        ctx[7] = document.getElementById('my8');
        ctx[8] = document.getElementById('my9');
        ctx[9] = document.getElementById('my10');
        ctx[10] = document.getElementById('my11');
        ctx[11] = document.getElementById('my12');
        
        for (let i = 0; i < 12; i++) {

            //console.log("dataSeries[i]");
            //console.log(dataSeries[i]);
            //console.log(ecgData.AnnotatedECG.component.series.component.sequenceSet.component[i+1].sequence.value.digits);

            var data = {
                labels: graphDataY,
                datasets: [
                    {
                        backgroundColor: 'rgb(54, 162, 235)',
                        borderColor: "#000000",
                        data: ecgData.AnnotatedECG.component.series.component.sequenceSet.component[i+1].sequence.value.digits,
                        /*data: dataSeries[i],*/
                        pointRadius: 0,
                        pointStyle: 'line',
                        borderWidth: 0.5,
                    }
                ]
            };

            //console.log("data");
            //console.log(data);
            
            var config = {
                type: 'line',
                data: data,
                options: {
                    responsive: true,
                    plugins: {
                            legend: {
                                display: false
                            }
                        },
                    animation: {
                        duration: 0
                    },
                    scales: {
                        x: {
                            type: 'linear',
                            ticks:  {
                                display: false,
                                stepSize: 0.1     
                            }
                        },
                        y: {
                            type: 'linear',
                            display: true,
                            ticks:  {
                                display: false,
                                stepSize: 100,
                                count: 10
                            }
                        }
                    }
                }
            };   

            myChart[i] = new Chart(ctx[i], config);
            //console.log(`Created chart ${i}`);
            //console.log(myChart[i]);
            
        }

    });

let canvasHeight = '5%';
let canvasWidth = '100%';
</script>

<svelte:head>
    <title>{$patient.name} - EKG 30.03.2022</title>
</svelte:head>

<nav class="pushpin-demo-nav" data-target="blue">
    <div class="nav-wrapper light-blue">    
        <div class="container">
            <a href="/" class="breadcrumb"><i class="material-icons">home</i></a>
            <a href="/patientlist" class="breadcrumb">Pasientregister</a>
            <a href="/dashboard" class="breadcrumb">{$patient.name}</a>
            <a href="/dashboard" class="breadcrumb">EKG 30.03.2022</a>
            <ul id="nav-mobile" class="right">
                <li><a href="/">Brukerprofil</a></li>
                <li><a href="/">Logg ut</a></li>
            </ul>
        </div>

    </div>
</nav>

<div class="row">
<div class="col s8">
    <canvas class="leadgraph" id="my1" bind:this={portfolio} width={canvasWidth} height={canvasHeight} />
    <canvas class="leadgraph" id="my2" bind:this={portfolio} width={canvasWidth} height={canvasHeight} />
    <canvas class="leadgraph" id="my3" bind:this={portfolio} width={canvasWidth} height={canvasHeight} />
    <canvas class="leadgraph" id="my4" bind:this={portfolio} width={canvasWidth} height={canvasHeight} />
    <canvas class="leadgraph" id="my5" bind:this={portfolio} width={canvasWidth} height={canvasHeight} />
    <canvas class="leadgraph" id="my6" bind:this={portfolio} width={canvasWidth} height={canvasHeight} />
    <canvas class="leadgraph" id="my7" bind:this={portfolio} width={canvasWidth} height={canvasHeight} />
    <canvas class="leadgraph" id="my8" bind:this={portfolio} width={canvasWidth} height={canvasHeight} />
    <canvas class="leadgraph" id="my9" bind:this={portfolio} width={canvasWidth} height={canvasHeight} />
    <canvas class="leadgraph" id="my10" bind:this={portfolio} width={canvasWidth} height={canvasHeight} />
    <canvas class="leadgraph" id="my11" bind:this={portfolio} width={canvasWidth} height={canvasHeight} />
    <canvas class="leadgraph" id="my12" bind:this={portfolio} width={canvasWidth} height={canvasHeight} />
</div>
<div class="col s2"></div>
<div class="col s2">

    <div class="card-panel compact">
                <table class="sm">
                    <tr><th colspan="2">Informasjon om opptaket</th></tr>
                    <tr><td>Hjertefrekvens</td><td>58</td></tr>
                    <tr><td>RR (min, maks)</td><td>1030 (1030,1030</td></tr>
                    <tr><td>Opptakslengde</td><td>10 sek</td></tr>
                    <tr><td>Pacemaker</td><td>Nei</td></tr>
                </table>
    </div>

    <div class="card-panel compact">
                <table class="sm">
                    <tr><th>Filterinnstillinger under opptak</th></tr>
                    <tr><td>Adaptiv signalutjevning</td></tr>
                    <tr><td>Båndstopp 50 og 60Hz</td></tr>
                </table>
    </div>

    <div class="card-panel compact">
                <table class="sm">
                    <tr><th colspan="3">Parametre</th></tr>
                    <tr><td>P</td><td>ms</td><td>120</td></tr>
                    <tr><td>PR</td><td>ms</td><td>130</td></tr>
                    <tr><td>QRS</td><td>ms</td><td>126</td></tr>
                    <tr><td>QT/QTc</td><td>ms</td><td>416/410</td></tr>
                    <tr><td>QTd/QTdc</td><td>ms</td><td>72/71</td></tr>
                    <tr><td>QRS akse</td><td>&deg;</td><td>21</td></tr>
                </table>
    </div>

</div>
</div>

<style>
    .leadgraph {
        margin-top: 5px;
        /*
        width:1700px !important; 
        height:70px !important;
        background-color: #f5f1d2;*/
    }
    td {padding: 5px 5px;}
    .compact {padding: 2px 5px;}
</style>
