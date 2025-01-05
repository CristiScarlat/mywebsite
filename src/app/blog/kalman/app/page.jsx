'use client'
import React, {Component, useEffect} from 'react';
import styles from "./page.module.css";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import {Line} from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const LINIAR = "lin";
const EXPONENTIAL = "expo";
const SINUSOIDAL = "sin";
const RAW = "raw";
const NOISY = "noisy";
const FILTERED = "filtered";
const kalmanParams = {R: 0.01, Q: 10, A: 0.9};

const KalmanApp = () =>  {

    const [rawSignalExp, setRawSignalExp] = React.useState({});
    const [noisySignalExp, setNoisySignalExp] = React.useState({});
    const [filteredSignalExp, setFilteredSignalExp] = React.useState({});
    const [dataToPlot, setDataToPlot] = React.useState({
        labels: [],
        datasets: [
            {
                label: 'raw signal',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: []
            },
            {
                label: 'noise',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(255,192,192,1)',
                borderColor: 'rgba(255,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(255,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: []
            },
            {
                label: 'Kalman',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(255,0,0,1)',
                borderColor: 'rgba(255,0,0,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(255,0,0,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: []
            }]
    });
    const [data, setData] = React.useState({});
    const [auto, setAuto] = React.useState(false);
    const [functionType, setFunctionType] = React.useState(LINIAR);
    const [kalmanParams, setKalmanParams] = React.useState({R: 0.01, Q: 10, A: 1, B: 1});
    const [raw, setRaw] = React.useState(true);
    const [noisy, setNoisy] = React.useState(false);
    const [filtered, setFiltered] = React.useState(false);

    useEffect(() => {

        getRawNoisyFilteredData();
    }, []);

    useEffect(() => {
        plotData()
    }, [data])

    useEffect(() => {
        let refreshTick = null;
        if (auto) {
            getRawNoisyFilteredData();
            refreshTick = setInterval(() => {
                getRawNoisyFilteredData();
            }, 1000)
        }
        return () => clearInterval(refreshTick);
    }, [auto])

    const kalman = (data, kalmanParams) => {
        let R = kalmanParams.R;//expected noise
        let Q = kalmanParams.Q;//measured noise
        let A = kalmanParams.A;//state vector
        let y = NaN;
        let Err = NaN;
        return data.map(x => {
            if (isNaN(y)) {
                y = x;
                Err = Q;
            } else {
                //Calculate previous state and previous error in estimate
                let prevX = A * y;
                let prevErr = ((A * Err) * A) + R;

                //calculate Kalman Gain
                let K = prevErr / (prevErr + Q);

                //Calculate new error in estimate
                Err = prevErr - (K * prevErr);
                //Calculate current estimate
                y = prevX + K * (x - prevX);

                //return filtered data
                return y;
            }
        });
    }


    const getRawNoisyFilteredData = () => {
        let rawSignalExp = [];
        let rawSignalLin = [];
        let rawSignalSin = [];

        //exponential function generator
        for (let i = 0; i < 100; i++) {
            rawSignalExp.push(Math.pow(0.8, i));
        }
        //sinusoidal function generator
        for (let i = 0; i < 100; i++) {
            rawSignalSin.push(Math.sin(2 * Math.PI * i / 100 * 5));
        }
        //liniar function generator
        for (let i = 0; i < 100; i++) {
            rawSignalLin.push(i / 100);
        }
        //Add noise to exonential function
        let noisySignalExp = rawSignalExp.map(function (v) {
            return v + Math.random();
        });
        //Add noise to liniar function
        let noisySignalLin = rawSignalLin.map(function (v) {
            return v + Math.random();
        });
        //Add noise to sin function
        let noisySignalSin = rawSignalSin.map(function (v) {
            return v + Math.random();
        });


        let filteredSignalExp = kalman(noisySignalExp, kalmanParams);

        let filteredSignalLin = kalman(noisySignalLin, kalmanParams);

        let filteredSignalSin = kalman(noisySignalSin, kalmanParams);

        setData({
                rawLin: rawSignalLin,
                noisyLin: noisySignalLin,
                filteredLin: filteredSignalLin,
                rawExp: rawSignalExp,
                noisyExp: noisySignalExp,
                filteredExp: filteredSignalExp,
                rawSin: rawSignalSin,
                noisySin: noisySignalSin,
                filteredSin: filteredSignalSin
        })
    }

    const plotData = () => {
        let temp = dataToPlot;
        switch (functionType) {
            case LINIAR:
                temp.datasets[0].data = raw ? data.rawLin : [];
                temp.datasets[1].data = noisy ? data.noisyLin : [];
                temp.datasets[2].data = filtered ? data.filteredLin : [];
                temp.labels = [];
                break;
            case EXPONENTIAL:
                temp.datasets[0].data = raw ? data.rawExp : [];
                temp.datasets[1].data = noisy ? data.noisyExp : [];
                temp.datasets[2].data = filtered ? data.filteredExp : [];
                temp.labels = [];
                break;
            case SINUSOIDAL:
                temp.datasets[0].data = raw ? data.rawSin : [];
                temp.datasets[1].data = noisy ? data.noisySin : [];
                temp.datasets[2].data = filtered ? data.filteredSin : [];
                temp.labels = [];
                break;
        }

        for (let i = 0; i < 100; i++) {
            temp.labels.push(i);
        }
        setDataToPlot(temp)
    }

    const handleAutoRefresh = () => {
        setAuto(!auto)

    }

    const handleFilterParameters = (e) => {
        let parameterName = e.target.id;
        let parameterValue = e.target.value;
        let temp = kalmanParams;
        temp[parameterName] = Number(parameterValue)
        setKalmanParams(temp)
    }

    const handleSubmitParams = () => {
        fetch('/kalman', {
            method: 'post',
            body: JSON.stringify(kalmanParams),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => {
                getRawNoisyFilteredData();
            })
    }

    const handleFunctionSelector = (e) => {
        setFunctionType(e.target.id);
        getRawNoisyFilteredData();
    }

    const handleFunctionDisplay = (e) => {

        switch (e.target.id) {
            case RAW:
                setRaw(!raw)
                break;
            case NOISY:
                setNoisy(!noisy)
                break;
            case FILTERED:
                setFiltered(!filtered)
                break;
        }
        getRawNoisyFilteredData();
    }

        return (
            <div style={{maxWidth: '60rem'}} className="m-auto">
                <div className={styles["app-wrapper"]}>
                    <div className={styles.header}>
                        Kalman filter at work !!
                    </div>
                    <div className={styles["body-wrapper"]}>
                        <div className={styles.ploter}>
                            <Line data={dataToPlot} height={200} options={
                                {
                                    responsive: true,
                                    plugins: {
                                        legend: {
                                            position: 'top',
                                        },
                                        title: {
                                            display: true,
                                            text: 'Chart.js Line Chart',
                                        },
                                    },
                                }}/>
                        </div>
                        <div className={styles.controls}>
                            <div className={styles.devider}/>
                            <div className="parameters">Filter parameters</div>
                            <div className={styles.subdevider}/>
                            <div className="slidecontainer">
                                <label htmlFor="R">R(InterSystem Noise) = {kalmanParams.R}</label>
                                <input type="range" min="0" max="1" step="0.01" value={kalmanParams.R}
                                       className={styles.slider} id="R" onChange={handleFilterParameters}/>
                                <label htmlFor="Q">Q(Measured Noise) = {kalmanParams.Q}</label>
                                <input type="range" min="0" max="100" step="0.1" value={kalmanParams.Q}
                                       className={styles.slider} id="Q" onChange={handleFilterParameters}/>
                                <label htmlFor="A">A(State Vector) = {kalmanParams.A}</label>
                                <input type="range" min="0" max="1" step="0.01" value={kalmanParams.A}
                                       className={styles.slider} id="A" onChange={handleFilterParameters}/>
                                {/* <label htmlFor="B">B = {kalmanParams.B}</label>
						<input type="range" min="0" max="100" step="0.01" value={kalmanParams.B} className={styles.slider} id="B" onChange={handleFilterParameters}/> */}
                            </div>
                            <div>
                                <button className={styles.button} onClick={handleSubmitParams}>Submit Parameters
                                </button>
                            </div>
                            <div className={styles.devider}/>
                            <div className="parameters">Function generator</div>
                            <div className={styles.subdevider}/>
                            <div className={styles["function-selector"]}>
                                <div>
                                    <button className={styles.button} onClick={(e) => {
                                        handleFunctionSelector(e)
                                    }} id='lin'>Liniar
                                    </button>
                                </div>
                                <div>
                                    <button className={styles.button} onClick={(e) => {
                                        handleFunctionSelector(e)
                                    }} id='expo'>Exponential
                                    </button>
                                </div>
                                <div>
                                    <button className={styles.button} onClick={(e) => {
                                        handleFunctionSelector(e)
                                    }} id='sin'>Sinus
                                    </button>
                                </div>
                            </div>
                            <div className={styles.devider}/>
                            <div className="parameters">Select to display</div>
                            <div className={styles.subdevider}/>
                            <div className="function-selector">
                                <div>
                                    <button className={styles.button} onClick={(e) => {
                                        handleFunctionDisplay(e)
                                    }} id='raw'>Raw
                                    </button>
                                </div>
                                <div>
                                    <button className={styles.button} onClick={(e) => {
                                        handleFunctionDisplay(e)
                                    }} id='noisy'>Noisy
                                    </button>
                                </div>
                                <div>
                                    <button className={styles.button} onClick={(e) => {
                                        handleFunctionDisplay(e)
                                    }} id='filtered'>Filtered
                                    </button>
                                </div>
                                <div>
                                    <button className={styles.button} onClick={handleAutoRefresh}
                                            id='refresh'>{!auto ? 'Play auto refresh' : 'Stop auto refresh'}</button>
                                </div>
                            </div>
                            {/*<div className={styles.devider}/>*/}
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default KalmanApp;