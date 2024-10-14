import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Header from './comp/header';
import NavBar from './comp/navBar';
import ItemNavBar from './comp/itemNavBar';
import ItemDesNavBar from './comp/itemDesNavBar';
import {BrowserRouter} from "react-router-dom";

describe('Header', () => {

      test('render itemDesNavBar', () => {
    render( <BrowserRouter><ItemDesNavBar texto='test' url='test' items={[{texto:"prueba",url:"prueba"}]} /></BrowserRouter>);
    const linkElement = screen.getByText('prueba');
    expect(linkElement).toBeInTheDocument();
  }
  );

    test('render itemNavBar ', () => {
    render( <BrowserRouter><ItemNavBar texto='test' url='test' /></BrowserRouter>);
    const linkElement = screen.getByText('test');
    expect(linkElement).toBeInTheDocument();
  }
  );

  test('render NavBar ', () => {
    render( <BrowserRouter><NavBar /></BrowserRouter>);
    const linkElement = screen.getByTestId('navbar');
    expect(linkElement).toBeInTheDocument();
  }
  );

    test('Header render', () => {
    render( <BrowserRouter><Header /></BrowserRouter>);
    const linkElement =
      screen.getByText(/Menudia/i);
    expect(linkElement).toBeInTheDocument();
  }
  );


});
