import React from 'react';

const QuoteBox = ({quote,author,color,handleQuote}) => {

    return (
        <div className='main-container' style={{background:color}}>
            <div className="card">
                <section className='container-quote'>
                    <i className="fas fa-quote-left"></i>
                    <h2 className='quote' style={{color}}>{quote}</h2>
                </section>
                <h3 className="author">{author}</h3>
                <button onClick={handleQuote} className='button-next' style={{background:color}}><i class="fas fa-angle-right fa-2x"></i></button>
            </div>
        </div>
    );
};

export default QuoteBox;