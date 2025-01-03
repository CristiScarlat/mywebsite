import styles from "./page.module.css";


const KalmanArticle = () => {
    return (
        <article className={styles.container}>
            <div>
                <img src="/blogArticles/kalman/images/kalman_at_work.jpeg" alt="..." className="w-100"/>
                <h1 className="text-center text-white my-4">Implementing a simple one dimension Kalman Filter in NodeJS</h1>
            </div>
            <section className={styles.section}>
                <p><strong>Kalman filtering</strong>, also known as&nbsp;<strong>linear quadratic
                    estimation</strong>&nbsp;(<strong>LQE</strong>), is an&nbsp;<a
                    href="https://en.wikipedia.org/wiki/Algorithm" target="_blank"
                    rel="nofollow noopener">algorithm</a>&nbsp;that uses a series of measurements observed over time,
                    containing&nbsp;<a href="https://en.wikipedia.org/wiki/Statistical_noise" target="_blank"
                                       rel="nofollow noopener">statistical noise</a>&nbsp;and other inaccuracies, and
                    produces estimates of unknown variables that tend to be more accurate than those based on a single
                    measurement alone, by estimating a&nbsp;<a
                        href="https://en.wikipedia.org/wiki/Joint_probability_distribution" target="_blank"
                        rel="nofollow noopener">joint probability distribution</a>&nbsp;over the variables for each
                    timeframe. The filter is named after&nbsp;<a
                        href="https://en.wikipedia.org/wiki/Rudolf_E._K%C3%A1lm%C3%A1n" target="_blank"
                        rel="nofollow noopener">Rudolf E. Kálmán</a>, one of the primary developers of its theory.(<a
                        href="https://en.wikipedia.org/wiki/Kalman_filter" target="_blank" rel="nofollow noopener">Kalman
                        Filter Wikipedia</a>).
                </p>
                <p>In order to implement the Kalman algorithm I have to draw a little flowchart of the algorithm :</p>
                <div className="p-4">
                    <img src="/blogArticles/kalman/images/kalman_flow_chart.jpeg" alt="..." className="w-100"/>
                </div>
                <p>The most 3 important steps in implementation of this algorithm are shown clearly in the picture above
                    :</p>
                <p><em>1.Calculate Kalman Gain</em>,</p>
                <p><strong>KG = Eest/Eest + Emes </strong> where <strong>KG</strong> = Kalman
                    Gain; <strong>Eest</strong> = error in estimate; <strong>Emes</strong> = error in measurement;</p>
                <p><em>2.Calculate current estimated state</em>,</p>
                <p><strong>ESTk = ESTk-1 + KG[MEA-ESTk-1] </strong>where<strong> ESTk</strong> = Current
                    estimate; <strong>Estk-1</strong> = Previous estimate; <strong>MEA</strong> = Measured state;</p>
                <p><em>3.Calculate new error in estimate</em></p>
                <p><strong>Eest = EestK-1 - KG*EestK-1</strong> where <strong>Eest</strong> = error in
                    estimate; <strong>EestK-1</strong> = previous error in estimate.</p>
                <p>For demonstrating the implementation of this algorithm I made a simple Express nodeJS backend and
                    React javascript frontend project. The project can be downloaded from github <a
                        href="https://github.com/CristiScarlat/KalmanFilter" target="_blank"
                        rel="nofollow noopener">https://github.com/CristiScarlat/KalmanFilter</a>.</p>
                <code>
                        <pre>
                            {`
const  kalman = (data, kalmanParams) => {

    let R = kalmanParams.R;//expected noise
    
    let Q = kalmanParams.Q;//measured noise
    
    let A = kalmanParams.A;//state vector
    
    let y = NaN;
    
    let Err = NaN;
    
    let filtered = data.map(x => {
    
    if (isNaN(y)) {
        
        y = x;
        
        Err = Q;
        
    } else {
    
        /* Calculate previous state and previous error in estimate */
        
        let prevX = A * y;
        
        let prevErr = ((A * Err) * A) + R;
        
        
        
        /* calculate Kalman Gain */
        
        let K = prevErr / (prevErr + Q);
        
        
        
        /* Calculate new error in estimate */
        
        Err = prevErr - (K * prevErr);
        
        /* Calculate current estimate */
        
        y = prevX + K * (x - prevX); 
        
        return y;
        
    }});
    
    return filtered;

}
                        `}
                        </pre>
                </code>
                <p>The implemented algorithm receives 3 arguments R = kalmanParams.R = expected noise, Q =
                    kalmanParams.Q = measured noise, A = kalmanParams.A = state vector and also the input that is an
                    array of points that draw the raw signal.</p>
                <p>Raw signal is generated in backend. There are 3 types of generated signal :</p>

                <p className="text-white">1.<strong>Linear</strong></p>

                <code>
                    <pre>{`
/* sinusoidal function generator */
for(i=0;i<100;i++){
    rawSignalSin.push(Math.sin(2 * Math.PI * i/100 * 5));
}`}
                    </pre>
                </code>
                <p className="text-white">2.<strong>Exponential</strong></p>
                <code>
                    <pre>{`
/* exponential function generator */
for(i=0;i<100;i++){
    rawSignalExp.push(Math.pow(0.8, i));
}
`}
                    </pre>
                </code>
                <p className="text-white">3.<strong>Low frequency Sine Wave</strong></p>
                <code>
                    <pre>{`
/* sinewave function generator */
for(i=0;i<100;i++){
    rawSignalSin.push(Math.sin(2 * Math.PI * i/100 * 5));
}
`}
                    </pre>
                </code>
                <p>For the purpose of this experiment, noise data was generated using the Math.random() method and added
                    to the raw data.</p>
                <code>
                    <pre>
                        {`
/* Add noise to exonential function */
let noisySignalExp = rawSignalExp.map(function(v) {

    return v + Math.random();

});

/* Add noise to liniar function */

let noisySignalLin = rawSignalLin.map(function(v) {

    return v + Math.random();

});

/* Add noise to sinewave function */

let noisySignalSin = rawSignalSin.map(function(v) {

    return v + Math.random();

});
                        `}
                    </pre>
                </code>
                <div className="p-4">
                    <img src="/blogArticles/kalman/images/kalman_noise.jpeg" alt="..." className="w-100"/>
                </div>
                <p>The kalman filter algorithm was applied on the noisy data and the result of Kalman filtering can be
                    seen in the next picture , the waveform in red color is the exponential function filtered by Kalman
                    algorithm.</p>
                <div className="p-4">
                    <img src="/blogArticles/kalman/images/kalman_at_work.jpeg" alt="..." className="w-100"/>
                </div>
            </section>

        </article>
    )
}

export default KalmanArticle;