import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Comparison = ({products}) =>
    products.length >= 2 ?
        <div className="row">
            <table id="tableID" className="table">
                <thead>
                <tr>
                    <th className="table-light">&nbsp;</th>
                    { products.map(product => <th key={`th-${product.id}`} className="text-center table-light">{product.name}</th>) }
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th className="table-light">Цена</th>
                    { products.map(product => <td key={`url-td-${product.id}`} className="text-center table-light">{product.price}</td>) }
                </tr>
                <tr>
                    <th className="table-light">Дисплеј</th>
                    { products.map(product => <td id="tab-description" key={`description-td-${product.id}`} className="text-center table-light">{getDisplay(product)}</td>) }
                </tr>
                <tr>
                    <th className="table-light">Резолуција</th>
                    { products.map(product => <td id="tab-description" key={`description-td-${product.id}`} className="text-center table-light">{getResolution(product)}</td>) }
                </tr>
                <tr>
                    <th className="table-light">Графичка картичка</th>
                    { products.map(product => <td id="tab-description" key={`description-td-${product.id}`} className="text-center table-light">{getGCard(product)}</td>) }
                </tr>
                <tr>
                    <th className="table-light">Внатрешна меморија</th>
                    { products.map(product => <td id="tab-description" key={`description-td-${product.id}`} className="text-center table-light">{getInternal(product)}</td>) }
                </tr>
                <tr>
                    <th className="table-light">Меморија</th>
                    { products.map(product => <td id="tab-description" key={`description-td-${product.id}`} className="text-center table-light">{getMemory(product)}</td>) }
                </tr>
                <tr>
                    <th className="table-light">Процесор</th>
                    { products.map(product => <td id="tab-description" key={`description-td-${product.id}`} className="text-center table-light">{getProcessor(product)}</td>) }
                </tr>


                </tbody>
            </table>
        </div> :
        <div id="tableID" className="text-info text-center">Изберете продукти за споредба!</div>

;

Comparison.propTypes = {
    products : PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    products : state.products
});
const getDisplay = (product) => {
    return product.description.split(',').map((text, index) => (
        index === 0 ?
            <React.Fragment key={`${text}-${index}`}>
                {text}
                <br/>
            </React.Fragment> : <React.Fragment />

    ));

};

const getProcessor = (product) => {
    return product.description.split(',').map((text, index) => (
        index === 4 ?
            <React.Fragment key={`${text}-${index}`}>
                {text}
                <br/>
            </React.Fragment> : <React.Fragment />

    ));
};
const getResolution = (product) => {
    return product.description.split(',').map((text, index) => (
        index === 5 ?
            <React.Fragment key={`${text}-${index}`}>
                {text}
                <br/>
            </React.Fragment> : <React.Fragment />

    ));
};

const getMemory = (product) => {
    return product.description.split(',').map((text, index) => (
        index === 3 ?
            <React.Fragment key={`${text}-${index}`}>
                {text}
                <br/>
            </React.Fragment> : <React.Fragment />

    ));
};
const getGCard = (product) => {
    return product.description.split(',').map((text, index) => (
        index === 1 ?
            <React.Fragment key={`${text}-${index}`}>
                {text}
                <br/>
            </React.Fragment> : <React.Fragment />

    ));
};
const getInternal = (product) => {
    return product.description.split(',').map((text, index) => (
        index === 2 ?
            <React.Fragment key={`${text}-${index}`}>
                {text}
                <br/>
            </React.Fragment> : <React.Fragment />


    ));
};


export default connect(mapStateToProps)(Comparison);