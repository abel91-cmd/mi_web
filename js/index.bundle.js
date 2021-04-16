/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./mi_pagina/view/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./mi_pagina/view/js/index.js":
/*!************************************!*\
  !*** ./mi_pagina/view/js/index.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_portfolio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/portfolio */ \"./mi_pagina/view/js/modules/portfolio.js\");\n/* harmony import */ var _modules_portfolio__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_portfolio__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/about */ \"./mi_pagina/view/js/modules/about.js\");\n/* harmony import */ var _modules_about__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_about__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _modules_botom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/botom */ \"./mi_pagina/view/js/modules/botom.js\");\n/* harmony import */ var _modules_botom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_botom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/scroll */ \"./mi_pagina/view/js/modules/scroll.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_scroll__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _modules_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/validation */ \"./mi_pagina/view/js/modules/validation.js\");\n/* harmony import */ var _modules_validation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_validation__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\n//# sourceURL=webpack:///./mi_pagina/view/js/index.js?");

/***/ }),

/***/ "./mi_pagina/view/js/modules/about.js":
/*!********************************************!*\
  !*** ./mi_pagina/view/js/modules/about.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var habilidades = document.querySelectorAll('.ancho');\nvar animation_about = document.getElementById('animation-about');\nvar select_about = document.querySelectorAll('.select-about');\nvar altura_ventana_about = window.innerHeight / 1.0;\nvar altura_ventana = window.innerHeight / 1.2;\n\nif (location.href) {\n  for (var i = 0; i < select_about.length; i++) {\n    select_about[i].classList.add('animation-about--show');\n  }\n}\n\nwindow.addEventListener('scroll', function () {\n  var altura_element = habilidades[0].getBoundingClientRect().top;\n  var altura_about = animation_about.getBoundingClientRect().top;\n\n  if (altura_about <= altura_ventana_about) {\n    for (var _i = 0; _i < select_about.length; _i++) {\n      select_about[_i].classList.add('animation-about--show');\n    }\n  } else {\n    for (var _i2 = 0; _i2 < select_about.length; _i2++) {\n      select_about[_i2].classList.remove('animation-about--show');\n    }\n  }\n\n  if (altura_element <= altura_ventana) {\n    habilidades[0].classList.add('barra-1');\n    habilidades[1].classList.add('barra-2');\n    habilidades[2].classList.add('barra-3');\n    habilidades[3].classList.add('barra-4');\n    habilidades[4].classList.add('barra-5');\n    habilidades[5].classList.add('barra-6');\n    habilidades[6].classList.add('barra-7');\n    habilidades[7].classList.add('barra-8');\n  } else {\n    habilidades.forEach(function (element, index) {\n      habilidades[index].classList.remove(\"barra-\".concat(index + 1));\n    });\n  }\n});\n\n//# sourceURL=webpack:///./mi_pagina/view/js/modules/about.js?");

/***/ }),

/***/ "./mi_pagina/view/js/modules/botom.js":
/*!********************************************!*\
  !*** ./mi_pagina/view/js/modules/botom.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var navegation = document.querySelectorAll('.nav-link');\nvar button = document.querySelector('.navbar-toggler');\nvar menu = document.getElementById('my-nav'); // const page = (a,b,c,d) => {\n//         navegation[a].classList.add('page')\n//         navegation[b].classList.remove('page')\n//         navegation[c].classList.remove('page')\n//         navegation[d].classList.remove('page') \n//         // navegation[e].classList.remove('page') \n// }\n// window.onscroll = function () {\n//     const scrol = document.documentElement.scrollTop\n//     if (scrol >= 0 && scrol <= 300) {\n//         page(0,1,2,3)\n//     } else if (scrol >= 400 && scrol <= 1000){\n//         page(1,0,2,3)\n//     } else if (scrol >= 1000 && scrol <= 3600){\n//         page(2,0,1,3)\n//     } else if (scrol >= 3800){\n//         page(3,1,2,0)\n//     }\n// }\n\nbutton.addEventListener('click', function (e) {\n  menu.classList.toggle('menu-show');\n});\n\n//# sourceURL=webpack:///./mi_pagina/view/js/modules/botom.js?");

/***/ }),

/***/ "./mi_pagina/view/js/modules/portfolio.js":
/*!************************************************!*\
  !*** ./mi_pagina/view/js/modules/portfolio.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var select = document.querySelectorAll('.select');\nvar img_1 = document.getElementById('img_1');\nvar img_2 = document.getElementById('img_2');\nvar images_1 = document.querySelectorAll('.img_1');\nvar images_2 = document.querySelectorAll('.img_2');\nvar imagenes = document.querySelectorAll('.img-portfolio');\nvar modal_p = document.querySelector('.modal-p ');\nvar modalImg = document.getElementById('modal-p__img');\nvar modal_p__content = document.querySelector('.modal-p__content');\nvar title_modal = ['hocal pipe industries', 'hocal pipe industries', 'intersumca', 'sweetworry lda', 'vpt t&t maritime', 'Simulador de procesos industriales ', 'Simulador de procesos industriales', 'Simulador de procesos industriales'];\nvar url_modal = ['https://abel91-cmd.github.io/hocal-pipe/', 'https://abel91-cmd.github.io/page1/', 'http://inter-sumca.com/', 'https://abel91-cmd.github.io/page2/', 'https://www.vpttrade.com/'];\nvar subtitle_modal = ['Mezcladora', 'Traslado de Pieza', 'Deposito de Agua Caliente'];\n\nfunction imagen(select1, select2) {\n  select[select1].classList.add('linea-select');\n  select[select2].classList.remove('linea-select');\n}\n\nimg_2.classList.add('pos-absolute');\n\nfor (var i = 0; i < images_1.length; i++) {\n  images_1[i].classList.add('mostrar');\n}\n\nvar _loop = function _loop(_i) {\n  imagenes[_i].addEventListener('click', function (e) {\n    modal_p.classList.add('modal-p--open');\n    var src = e.target.src;\n    modalImg.setAttribute(\"src\", src);\n    modal_p__content.childNodes[0].textContent = title_modal[_i].toLocaleUpperCase();\n    modal_p__content.childNodes[2].textContent = url_modal[_i];\n    modal_p__content.childNodes[2].setAttribute('href', url_modal[_i]);\n    modal_p__content.childNodes[1].textContent = subtitle_modal[_i - 5];\n  });\n};\n\nfor (var _i = 0; _i < imagenes.length; _i++) {\n  _loop(_i);\n}\n\nmodal_p.addEventListener('click', function (e) {\n  if (e.target.classList.contains('modal-p')) {\n    modal_p.classList.remove('modal-p--open');\n  }\n});\nselect[0].classList.add('linea-select');\n\nfor (var _i2 = 0; _i2 < select.length; _i2++) {\n  select[_i2].addEventListener('click', function (e) {\n    e.preventDefault();\n\n    switch (e.target.id) {\n      case '1':\n        imagen(0, 1);\n\n        for (var _i3 = 0; _i3 < images_2.length; _i3++) {\n          images_2[_i3].classList.remove('mostrar');\n        }\n\n        img_2.classList.remove('pos-static');\n        img_1.classList.add('pos-static');\n\n        for (var _i4 = 0; _i4 < images_1.length; _i4++) {\n          images_1[_i4].classList.add('mostrar');\n        }\n\n        break;\n\n      case '2':\n        imagen(1, 0);\n\n        for (var _i5 = 0; _i5 < images_1.length; _i5++) {\n          images_1[_i5].classList.remove('mostrar');\n        }\n\n        setTimeout(function () {\n          img_1.classList.remove('pos-static');\n          img_1.classList.add('pos-absolute');\n        }, 50);\n        img_2.classList.add('pos-static');\n\n        for (var _i6 = 0; _i6 < images_2.length; _i6++) {\n          images_2[_i6].classList.add('mostrar');\n        }\n\n        break;\n\n      default:\n        break;\n    }\n  });\n}\n\n//# sourceURL=webpack:///./mi_pagina/view/js/modules/portfolio.js?");

/***/ }),

/***/ "./mi_pagina/view/js/modules/scroll.js":
/*!*********************************************!*\
  !*** ./mi_pagina/view/js/modules/scroll.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var navegation = document.querySelectorAll('.nav-link');\nvar identificador = document.querySelectorAll('.identificador');\nvar altura_about = window.innerHeight / 10;\nvar altura_service = window.innerHeight / 20;\nvar altura_portfolio = window.innerHeight / 30;\nvar altura_contact = window.innerHeight / 40; // navegation[0].classList.add('page')\n\nwindow.addEventListener('scroll', function () {\n  var altura_element_1 = identificador[1].getBoundingClientRect().top;\n  var altura_element_2 = identificador[2].getBoundingClientRect().top;\n  var altura_element_3 = identificador[3].getBoundingClientRect().top;\n  var altura_element_4 = identificador[4].getBoundingClientRect().top; // if (altura_element_1 <= altura_about) {\n  //     navegation[1].classList.add('page')\n  //     navegation[0].classList.remove('page')\n  // }else if (altura_element_1 >= altura_about){\n  //     navegation[0].classList.add('page')\n  //     navegation[1].classList.remove('page')\n  // }\n  // if (altura_element_2 <= altura_service) {\n  //     navegation[2].classList.add('page')\n  //     navegation[1].classList.remove('page')\n  // }else if(altura_element_2 >= altura_service){\n  //     navegation[2].classList.remove('page')\n  //     navegation[1].classList.add('page')\n  // }\n  // if (altura_element_3 <= altura_portfolio) {\n  //     navegation[3].classList.add('page')\n  //     navegation[2].classList.remove('page')\n  // }else{\n  //     navegation[3].classList.remove('page')\n  //     navegation[2].classList.add('page')\n  // }\n});\n\n//# sourceURL=webpack:///./mi_pagina/view/js/modules/scroll.js?");

/***/ }),

/***/ "./mi_pagina/view/js/modules/validation.js":
/*!*************************************************!*\
  !*** ./mi_pagina/view/js/modules/validation.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var formulario = document.getElementById('form');\nvar inputs = document.querySelectorAll('.form-control');\nvar expresiones = {\n  nombre: /^[a-zA-ZÀ-ÿ\\s]{1,40}$/,\n  // Letras y espacios, pueden llevar acentos.\n  correo: /^(([^<>()\\[\\]\\\\.,:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/,\n  telefono: /^\\d{7,14}$/ // 7 a 14 numeros.\n\n};\nvar campos = {\n  nombre: false,\n  correo: false,\n  telefono: false,\n  mensaje: false\n};\n\nvar validarValorInput = function validarValorInput(posicion, expresionName) {\n  if (inputs[posicion].value.trim().length > 0) {\n    if (expresionName.test(inputs[posicion].value)) {\n      inputs[posicion].classList.add('focus');\n      inputs[posicion].classList.remove('error');\n    } else {\n      inputs[posicion].classList.remove('focus');\n      inputs[posicion].classList.add('error');\n    }\n  }\n};\n\nfor (var i = 0; i < inputs.length; i++) {\n  switch (i) {\n    case 0:\n      validarValorInput(0, expresiones.nombre);\n      break;\n\n    case 1:\n      validarValorInput(1, expresiones.correo);\n      break;\n\n    case 2:\n      validarValorInput(2, expresiones.telefono);\n      break;\n  }\n}\n\nvar validarFormulario = function validarFormulario(e) {\n  switch (e.target.name) {\n    case \"nombre\":\n      validarCampo(expresiones.nombre, e.target, 0, 'nombre');\n      break;\n\n    case \"correo\":\n      validarCampo(expresiones.correo, e.target, 1, 'correo');\n      break;\n\n    case \"telefono\":\n      validarCampo(expresiones.telefono, e.target, 2, 'telefono');\n      break;\n  }\n};\n\nvar validarCampo = function validarCampo(expresion, input, key, campo) {\n  if (inputs[key].value.trim().length > 0) {\n    campos[campo] = true;\n\n    if (expresion.test(input.value)) {\n      inputs[key].classList.add('focus');\n      inputs[key].classList.remove('error');\n    } else {\n      inputs[key].classList.remove('focus');\n      inputs[key].classList.add('error');\n    }\n  } else {\n    campos[campo] = false;\n    inputs[key].classList.remove('error');\n    inputs[key].classList.add('focus');\n  }\n};\n\ninputs.forEach(function (input) {\n  input.addEventListener('keyup', validarFormulario);\n  input.addEventListener('blur', validarFormulario);\n  input.addEventListener('mouseenter', validarFormulario);\n});\nformulario.addEventListener('submit', function (e) {\n  e.preventDefault();\n\n  if (campos.nombre && campos.correo && campos.telefono) {\n    formulario.reset();\n    document.getElementById('message-sucess').classList.add('message-sucess--active');\n    setTimeout(function () {\n      document.getElementById('message-sucess').classList.remove('message-sucess--active');\n    }, 5000);\n  } else {\n    var error = document.querySelectorAll('.message-error');\n    error.forEach(function (errors) {\n      errors.classList.remove('d-none');\n    });\n  }\n});\n\n//# sourceURL=webpack:///./mi_pagina/view/js/modules/validation.js?");

/***/ })

/******/ });