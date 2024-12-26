import './services.css';

const Services = () => {
    return (
        <div className="services parallax top-bg-container gallery" id="about">
            <div className='bg-text'></div>
            <div className='services__content'>
                <h2 className='services__title'>We Deliver</h2>
                <h2 className='services__title'>Digital Productivity</h2>
                <p className='services__subtitle'>
                    We craft technology solutions that digitally bond and transform the productivity of our customers and their citizens, 
                    workers, consumers and partners. 
                </p>
            </div>
        
            <img src="./services/crafty.png" className='service service-crafty'/>
            <img src="./services/svc.png" className='service service-svc'/>
            <img src="./services/envision.png" className='service service-envision'/>
            <img src="./services/dyn.png" className='service service-dyn'/>
            <img src="./services/trans.png" className='service service-trans'/>

        </div>
    );
}

export default Services;