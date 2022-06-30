import React from 'react';
import ReactDOM from 'react-dom/client';
import $ from 'jquery';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
$(function () {
  $("#graphics").click(function () {
    $(".app").hide()
    $(".data").hide()
    $(".text").hide()
    $(".graphics").show()
    $(".docs").hide()
    $(".btn.reset span").css("background-color", "#f6f4e6")
  });

  $("#data").click(function () {
    $(".app").hide()
    $(".graphics").hide()
    $(".text").hide()
    $(".data").show()
    $(".docs").hide()
    $(".btn.reset span").css("background-color", "#f6f4e6")
  });

  $("#text").click(function () {
    $(".app").hide()
    $(".graphics").hide()
    $(".data").hide()
    $(".text").show()
    $(".docs").hide()
    $(".btn.reset span").css("background-color", "#f6f4e6")
  });

  $("#app").click(function () {
    $(".text").hide()
    $(".graphics").hide()
    $(".data").hide()
    $(".app").show()
    $(".docs").hide()
    $(".btn.reset span").css("background-color", "#f6f4e6")
  });

  $("#docs").click(function () {
    $(".text").hide()
    $(".graphics").hide()
    $(".data").hide()
    $(".app").hide()
    $(".docs").show()
    $(".btn.reset span").css("background-color", "#f6f4e6")
  });

  $("#reset").click(function () {
    $(".text").show()
    $(".graphics").show()
    $(".data").show()
    $(".app").show()
    $(".docs").show()
    $(".btn.reset span").css("background-color", "#fddb3a")
  });
})

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
