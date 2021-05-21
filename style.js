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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./thunder-pruebas/blink-src/js/cke_styles.js":
/*!*****************************************************!*\
  !*** ./thunder-pruebas/blink-src/js/cke_styles.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
*   Array con la definición de los estilos para el editor de CKEditor
*/
const ckeStyles = [{
  name: 'Caja 1',
  type: 'widget',
  widget: 'blink_box',
  attributes: {
    'class': 'box-1'
  }
}, {
  name: 'Caja 2',
  type: 'widget',
  widget: 'blink_box',
  attributes: {
    'class': 'box-2'
  }
}, {
  name: 'Énfasis',
  element: 'span',
  attributes: {
    'class': 'bck-enfasis'
  }
}];
/* harmony default export */ __webpack_exports__["default"] = (ckeStyles);

/***/ }),

/***/ "./thunder-pruebas/blink-src/js/homepage.js":
/*!***************************************************!*\
  !*** ./thunder-pruebas/blink-src/js/homepage.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  var Homepage = function (data) {
    if (!data) return new Error('No data defined');
    this.DATA_LOADED = data;
    this.ITEMS_PER_PAGE = this.DATA_LOADED.num_items;
    this.STYLE = blink.theme.styles.thunder.prototype; // Ojito con esto

    this.data = this.DATA_LOADED.data;
    this.prevActivity = parseInt(window.location.hash.replace(this.STYLE.unitHashPrefix, ""));
    this.fromActivity = !isNaN(this.prevActivity);
    this.mainContainer = document.getElementById("slider");
    this.$mainContainer = $(this.mainContainer);
    this.layoutData = {
      filledUnits: []
    };
  };

  Homepage.prototype.init = function () {
    var overlay = this.createElement('DIV', {
      'class': 'overlay-background'
    }),
        // Translucid purple mask.
    firstPage = this.getFirstpageHtml(),
        secondPage = this.getSecondpageHtml(),
        thirdPage = this.getThirdpageHtml(),
        leftControl = this.createElement('SPAN', {
      'class': 'main_page-slider_control prev fa fa-chevron-left ' + (this.fromActivity ? 'active' : '')
    }),
        rightControl = this.createElement('SPAN', {
      'class': 'main_page-slider_control next fa fa-chevron-right ' + (!this.fromActivity ? 'active' : '')
    });
    this.$mainContainer.html('').append(overlay, firstPage, secondPage, thirdPage, leftControl, rightControl);
    $.ajax({
      complete: function () {
        this.addGrades();
      }.bind(this)
    });
    $second_slider_elem = $(secondPage);
    $third_slider_elem = $(thirdPage);
    $second_slider_controls = $second_slider_elem.find('.slider_control');
    $third_slider_controls = $third_slider_elem.find('.slider_control'); // Left/right slider controls - main page.

    leftControl.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      var $this = $(this),
          $pageItems = $([firstPage, secondPage, thirdPage]),
          $activePage = $pageItems.filter('.active'),
          $target = $pageItems.first();
      $activePage.removeClass('active');
      $pageItems.each(function (i, el) {
        if ($activePage.get(0) === el && i > 0) {
          $target = $($pageItems.get(--i));

          switch (i) {
            case 0:
              // Redirects to the Main Page.
              $this.removeClass('active');
              $this.siblings('.next').addClass('active');
              $target.addClass('active');
              break;

            case 1:
              // Redirects to the second page.
              var targetPage = $activePage.find('.item.active').attr('data-page'),
                  activePage = $target.find('.item.active').attr('data-page'); // If the target page is not the active page, we should show the page that contains
              // the last visited unit.

              targetPage !== activePage ? $second_slider_elem.one('slid.bs.carousel', function () {
                setTimeout(function () {
                  $target.addClass('active');
                }, 100);
              }).carousel(parseInt(targetPage)) : $target.addClass('active');
              break;
          }
        }
      });
    });
    rightControl.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation(); // Hide First Page Elements

      firstPage.classList.remove('active');
      this.classList.remove('active'); // Show Second page elements

      secondPage.classList.add('active');
      leftControl.classList.add('active');
    }); /////////////////////
    // Carousel events //
    /////////////////////

    $second_slider_elem.add($third_slider_elem).on('slide.bs.carousel', function (e) {
      var $this = $(this),
          forwards = e.direction === 'left',
          $target = $this.find(forwards ? '.fa.next' : '.fa.prev'); // Depending on the carousel direcion, we show or hide the slider controls on both
      // the second and the third pages in case we reach the firs element or the last
      // element of the carousel.

      $this.one('slid.bs.carousel', function (e) {
        var $pages = $this.find('.item');
        $pages.filter('.active:' + (forwards ? 'last' : 'first') + '-of-type').length !== 0 ? $target.addClass('invisible').siblings('.fa').removeClass('invisible') : $target.add($target.siblings('.fa')).removeClass('invisible');
      });
    });
    this.$mainContainer.css('overflow', 'auto'); // Depending on which carousel element is shown, we show or hide the slider controls
    // on the second page.

    $third_slider_elem.find('.item.active:first-of-type').length == 0 && $third_slider_elem.find('.fa.prev').removeClass('invisible');
    $third_slider_elem.find('.item.active:last-of-type').length != 0 && $third_slider_elem.find('.fa.next').addClass('invisible'); ////////////
    // Events //
    ////////////
    // Unit button.

    $second_slider_elem.find('.unit:not(.empty)').bind("click", function () {
      var unit = $(this).attr("data-unit"),
          $units = $third_slider_elem.find('.item');
      $second_slider_elem.removeClass('active');
      $third_slider_elem.carousel(parseInt(unit)); // If the target unit is not the active one, we should carousel to it
      // before showing it.

      $units.eq(unit).hasClass('active') ? $third_slider_elem.addClass('active') : $third_slider_elem.one('slid.bs.carousel', function () {
        setTimeout(function () {
          $third_slider_elem.addClass('active');
        }, 100);
      });
    }); // Subunit button.

    document.querySelectorAll("a.activity-text-data").forEach(function (subunit) {
      subunit.addEventListener("click", function (e) {
        var action = subunit.getAttribute("data-onclick");
        eval(action);
      });
    });
  }; ///////////////////////////
  // First page - Landing. //
  ///////////////////////////


  Homepage.prototype.getFirstpageHtml = function () {
    var mainPage = this.createElement('DIV', {
      'id': 'main_page',
      'class': (!this.fromActivity ? 'active' : '') + ' page-item'
    }); // Book info.

    var bookInfo = this.createElement('DIV', {
      'class': 'book-info'
    }),
        title = this.createElement('H1'),
        description = this.createElement('DIV', {
      'class': 'description'
    });
    title.append(document.createTextNode(this.data["title"]));
    description.append(document.createTextNode(this.data["description"]));
    mainPage.appendChild(bookInfo).append(title, description);
    return mainPage;
  }; //////////////////////////////////////
  // Second page - Carousel of units. //
  //////////////////////////////////////


  Homepage.prototype.getSecondpageHtml = function () {
    var html = '',
        units = this.data["units"],
        auxUnits = units.slice(),
        pageNumber; // Required Elements

    var secondPage = this.createElement('DIV', {
      'id': 'second_page',
      'class': 'carousel slide carousel-fade page-item',
      'data-interval': 'false'
    }),
        carouselTarget = this.createElement('DIV', {
      'id': 'second_page',
      'class': 'carousel-inner'
    }); // If there aren't enough units to fill the last page, we use empty objects to fill
    // that spaces and make flex-box work fine.

    var pages = Math.ceil(units.length / this.ITEMS_PER_PAGE),
        evenUnitsNumber = pages > 1 ? Math.ceil(units.length / this.ITEMS_PER_PAGE) * this.ITEMS_PER_PAGE : units.length;

    if (units.length < evenUnitsNumber) {
      while (auxUnits.length < evenUnitsNumber) {
        auxUnits.push({});
      }
    }

    auxUnits.forEach(function (unit, index) {
      var newPage = index % this.ITEMS_PER_PAGE == 0,
          closePage = (index + 1) % this.ITEMS_PER_PAGE == 0 || index + 1 === auxUnits.length,
          isFilled = typeof unit.subunits !== 'undefined' && (unit.subunits.length > 0 || unit.resources.length > 0),
          justFill = Object.keys(unit).length === 0,
          // comprobamos que no sea una actividad de relleno.
      classString = 'unit empty' + (justFill ? ' fill-unit' : ''),
          attributeString = '';
      !pageNumber && typeof pageNumber === 'undefined' ? // If pageNumber is undefined, we set it to 0.
      pageNumber = 0 : newPage && ++pageNumber; // Else, if we're creating a new page, we should increase it.

      if (isFilled) {
        classString = classString.replace(' empty', '');
        attributeString = 'data-unit="' + this.layoutData.filledUnits.length + '"';
        unit.pageId = pageNumber;
        this.layoutData.filledUnits.push(unit);
      }

      html += newPage ? '<div class="item ' + (index == 0 ? 'active' : '') + '" data-page="' + pageNumber + '">' : '';
      html += '<div class="' + classString + '" ' + attributeString + '">';

      if (!justFill) {
        var defaultBg = unit["image"].match(/\/images\/libro\/verde\.png/g) !== null;
        bgUrl = defaultBg ? this.STYLE.defaultUnitImage : unit["image"];
        html += '<div class="img' + (defaultBg ? ' default' : '') + '" style="background-image: url(' + bgUrl + ')"></div>';
        html += '<div class="unit-info">';
        html += '<h2>' + unit["title"] + '</h2>';
        html += '<p title="' + unit["description"] + '">' + unit["description"] + '</p>';
        html += '</div>';
      }

      html += '</div>';
      html += closePage ? '</div>' : '';
    }.bind(this));
    carouselTarget.innerHTML = html; // Wrap everything inside secondPage.

    secondPage.append(carouselTarget);
    this.carouselize(secondPage, {}, 'second-slider_control'); // If there are less units than items per page, we must hide the carousel button.

    auxUnits.length <= this.ITEMS_PER_PAGE && secondPage.querySelector('.next.fa.fa-chevron-right').classList.add('invisible');
    return secondPage;
  }; //////////////////////////////////////
  // Third Page - List of activities. //
  //////////////////////////////////////


  Homepage.prototype.getThirdpageHtml = function () {
    var html = '';
    thirdPage = this.createElement('DIV', {
      'id': 'third_page',
      'class': 'carousel slide carousel-fade page-item ' + (this.fromActivity ? 'active' : ''),
      'data-interval': 'false'
    }), html += '<div class="carousel-inner">';
    this.layoutData.filledUnits.forEach(function (unit, index) {
      this.prevActivity === parseInt(unit.id) || !this.fromActivity && index == 0 ? isActive = ' active' : isActive = '';
      var defaultBg = unit["image"].match(/\/images\/libro\/verde\.png/g) !== null;
      bgUrl = defaultBg ? this.STYLE.defaultUnitImage : unit["image"];
      html += '<div class="item' + isActive + '" data-page="' + unit.pageId + '" data-unit="' + unit.id + '">';
      html += '<div class="unit">'; // Unit image.

      html += '<div class="img' + (defaultBg ? ' default' : '') + '" style="background-image: url(' + bgUrl + ')"></div>'; // Unit info.

      html += '<div class="unit-info">';
      html += '<h2>' + unit["title"] + '</h2>';
      html += '<p>' + unit["description"] + '<p>';
      html += '</div>';
      html += '</div>'; // Unit content.

      html += '<div class="unit_content">';

      var subunits = unit["subunits"],
          resources = unit["resources"],
          t_subunits = subunits.length + resources.length,
          _createActivityElement = this.createActivityElement.bind(this); // If there are subunits, we add the subunits container.


      subunits.length > 0 && function () {
        html += '<h3 class="subunits-header">' + textweb("course_unit_activities") + '</h3>';
        html += '<div class="activities-list">';
        subunits.forEach(function (activity) {
          !activity.ocultar && (html += _createActivityElement(activity).outerHTML);
        });
        html += '</div>';
      }(); // If there are resources, we add the resources container.

      resources.length > 0 && function () {
        html += '<h3 id="resources-header">' + textweb('course_supplement_content') + '</h3>';
        html += '<div class="activities-list">';
        resources.forEach(function (activity) {
          !activity.ocultar && (html += _createActivityElement(activity).outerHTML);
        });
        html += '</div>';
      }();
      html += '</div>';
      html += '</div>';
    }.bind(this));
    html += '</div>';
    thirdPage.innerHTML = html;
    this.carouselize(thirdPage, {}, 'third-slider_control');
    return thirdPage;
  };

  Homepage.prototype.createElement = function (type, attributes) {
    var element = document.createElement(type);
    attributes && typeof attributes === 'object' && Object.keys(attributes).forEach(function (attrName) {
      element.setAttribute(attrName, attributes[attrName]);
    });
    return element;
  };

  Homepage.prototype.addGrades = function () {
    var _addGrade = function (activityObj, id) {
      if (!activityObj || typeof activityObj === undefined || activityObj === null || activityObj.nota === '') return;
      var nota = this.createElement('SPAN', {
        'class': 'nota'
      }),
          wrapper = this.mainContainer.querySelector('[data-id="' + id + '"]');
      wrapper.appendChild(nota).append(activityObj.nota);
    }.bind(this);

    for (var idActividad in this.DATA_LOADED.actividades) {
      if (isNaN(parseInt(idActividad))) return;
      var actividad = this.DATA_LOADED.actividades[idActividad];

      _addGrade(actividad, idActividad);
    }
  };

  Homepage.prototype.carouselize = function (element, config, className) {
    var $element = $(element),
        defaultConfig = {
      cycle: false,
      ride: false,
      pause: false
    },
        controlLeft = this.createElement('SPAN', {
      'class': 'slider_control prev fa fa-chevron-left invisible'
    }),
        controlRight = this.createElement('SPAN', {
      'class': 'slider_control next fa fa-chevron-right'
    });

    if (className) {
      controlLeft.className = controlLeft.className.concat(' ', className);
      controlRight.className = controlRight.className.concat(' ', className);
    }

    $element.prepend(controlLeft).append(controlRight);
    $element.carousel(defaultConfig); // Left/right slider controls

    controlLeft.addEventListener('click', function () {
      $element.carousel('prev');
    });
    controlRight.addEventListener('click', function () {
      $element.carousel('next');
    });
  };
  /**
   * [createActivityElement Crea un elemento del listado de actividades del tema con los datos de una actividad.]
   * @param  {json} activity Datos de la actividad.
   * @return {html}          Elemento HTML del listado de actividades.
   */


  Homepage.prototype.createActivityElement = function (activity) {
    var activityWrapper = this.createElement('DIV', {
      'class': 'subunit',
      'data-id': activity.id
    }); // Send homework button.

    if (this.data.includeHomeworkIcon && activity.canBeHomework) {
      var iconWrapper = this.createElement('SPAN', {
        'class': 'icon icon-enviar'
      }),
          image = this.createElement('IMG', {
        'src': this.data.supportsTasks ? '/themes/responsive/images/libro/icons8-send-90.png' : '/themes/responsive/images/libro/activ-icon-deberes.png',
        'alt': this.data.supportsTasks ? textweb('course_item_send_task') : textweb('course_item_send_homework')
      });
      iconWrapper.append(image); // Creamos la etiqueta "script" a la que estará asociada la acción del botón de enviar deberes.

      var scriptTag = this.createElement('SCRIPT', {
        'type': 'text/javascript'
      }),
          scriptCode = '$("#third_page").on("tap click", \'[data-id="' + activity.id + '"] .icon-enviar\', function(){' + (this.data.supportsTasks && activity.onlyVisibleTeachers ? '_showAlert(' + textweb('task_visible_only_teacher') + ');' : 'openSendActivityHomework(' + activity.id + ', ' + this.data.supportsTasks + ');') + '})';
      scriptTag.innerText = scriptCode;
      activityWrapper.append(iconWrapper, scriptTag);
    } // Activity data


    var dataWrapper = this.createElement('DIV', {
      'class': 'activity-data'
    }); // Wrapper

    var anchor = this.createElement('A', {
      'class': 'activity-text-data',
      'href': 'javascript:void(0)',
      'data-onclick': activity["onclickTitle"]
    }); // Link to the activity
    // Activity title

    var titleEl = this.createElement('P', {
      'class': 'activity-title'
    }),
        titleText = activity['title'] !== '' ? activity['title'] : textweb('course_actividad_no_name');
    anchor.appendChild(titleEl).append(document.createTextNode(titleText)); // If there's a description, we insert it.

    if (typeof activity['description'] !== 'undefined' && activity['description'] != '') {
      var description = this.createElement('P', {
        'class': 'activity-description'
      });
      description.append(document.createTextNode(activity['description']));
      anchor.append(description);
    }

    activityWrapper.appendChild(dataWrapper).append(anchor);
    return activityWrapper;
  };

  Homepage.prototype.preloadImage = function (url, callback, onError) {
    var preloader = this.createElement('img', {
      'src': url
    });

    fullCallback = function () {
      callback(url);
      preloader = null;
    };

    preloader.addEventListener('load', fullCallback);
    preloader.addEventListener('error', onError);
  };
})();

/***/ }),

/***/ "./thunder-pruebas/blink-src/js/main.js":
/*!***********************************************!*\
  !*** ./thunder-pruebas/blink-src/js/main.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cke_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cke_styles */ "./thunder-pruebas/blink-src/js/cke_styles.js");
/* harmony import */ var _overrides__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./overrides */ "./thunder-pruebas/blink-src/js/overrides.js");
/*
*   Javascript principal con la estructura básica del estilo
*/
__webpack_require__(/*! ./homepage.js */ "./thunder-pruebas/blink-src/js/homepage.js");




(function (blink) {
  'use strict';

  var ThunderPruebasStyle = function () {
    blink.theme.styles["thunder"].apply(this, arguments);
  };

  ThunderPruebasStyle.prototype = {
    parent: blink.theme.styles["thunder"].prototype,
    bodyClassName: 'content_type_clase_thunder-pruebas',
    extraPlugins: ['image2'],
    ckEditorStyles: {
      name: 'thunder-pruebas',
      styles: _cke_styles__WEBPACK_IMPORTED_MODULE_0__["default"]
    },
    init: function () {
      // Heredo de otro estilo
      this.parent.init.call(this.parent, this);
      this.removeFinalSlide();
    },
    ..._overrides__WEBPACK_IMPORTED_MODULE_1__["default"]
  };
  ThunderPruebasStyle.prototype = _.extend({}, new blink.theme.styles["thunder"](), ThunderPruebasStyle.prototype);
  blink.theme.styles['thunder-pruebas'] = ThunderPruebasStyle;
})(blink);

/***/ }),

/***/ "./thunder-pruebas/blink-src/js/overrides.js":
/*!****************************************************!*\
  !*** ./thunder-pruebas/blink-src/js/overrides.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
*   Javascript donde están las funciones que sobreescriben a funciones de Basic
*/
const overrides = {
  removeFinalSlide: t => {
    let thisStyle = blink.activity.currentStyle;
    thisStyle.parent.removeFinalSlide.call(thisStyle.parent, thisStyle, true);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (overrides);

/***/ }),

/***/ "./thunder-pruebas/blink-src/styles/main.scss":
/*!*****************************************************!*\
  !*** ./thunder-pruebas/blink-src/styles/main.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }


/***/ }),

/***/ 0:
/*!***************************************************************************************************!*\
  !*** multi ./thunder-pruebas/blink-src/js/main.js ./thunder-pruebas/blink-src/styles/main.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! D:\workspaces\web\blinkweb\blink\www\themes\responsive\assets\styles\thunder-pruebas\blink-src\js\main.js */"./thunder-pruebas/blink-src/js/main.js");
module.exports = __webpack_require__(/*! D:\workspaces\web\blinkweb\blink\www\themes\responsive\assets\styles\thunder-pruebas\blink-src\styles\main.scss */"./thunder-pruebas/blink-src/styles/main.scss");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vdGh1bmRlci1jbG9uYWJsZS9ibGluay1zcmMvanMvY2tlX3N0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi90aHVuZGVyLWNsb25hYmxlL2JsaW5rLXNyYy9qcy9ob21lcGFnZS5qcyIsIndlYnBhY2s6Ly8vLi90aHVuZGVyLWNsb25hYmxlL2JsaW5rLXNyYy9qcy9tYWluLmpzIiwid2VicGFjazovLy8uL3RodW5kZXItY2xvbmFibGUvYmxpbmstc3JjL2pzL292ZXJyaWRlcy5qcyIsIndlYnBhY2s6Ly8vLi90aHVuZGVyLWNsb25hYmxlL2JsaW5rLXNyYy9zdHlsZXMvbWFpbi5zY3NzPzRlNGIiXSwibmFtZXMiOlsiY2tlU3R5bGVzIiwibmFtZSIsInR5cGUiLCJ3aWRnZXQiLCJhdHRyaWJ1dGVzIiwiZWxlbWVudCIsIkhvbWVwYWdlIiwiZGF0YSIsIkVycm9yIiwiREFUQV9MT0FERUQiLCJJVEVNU19QRVJfUEFHRSIsIm51bV9pdGVtcyIsIlNUWUxFIiwiYmxpbmsiLCJ0aGVtZSIsInN0eWxlcyIsInRodW5kZXIiLCJwcm90b3R5cGUiLCJwcmV2QWN0aXZpdHkiLCJwYXJzZUludCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaGFzaCIsInJlcGxhY2UiLCJ1bml0SGFzaFByZWZpeCIsImZyb21BY3Rpdml0eSIsImlzTmFOIiwibWFpbkNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCIkbWFpbkNvbnRhaW5lciIsIiQiLCJsYXlvdXREYXRhIiwiZmlsbGVkVW5pdHMiLCJpbml0Iiwib3ZlcmxheSIsImNyZWF0ZUVsZW1lbnQiLCJmaXJzdFBhZ2UiLCJnZXRGaXJzdHBhZ2VIdG1sIiwic2Vjb25kUGFnZSIsImdldFNlY29uZHBhZ2VIdG1sIiwidGhpcmRQYWdlIiwiZ2V0VGhpcmRwYWdlSHRtbCIsImxlZnRDb250cm9sIiwicmlnaHRDb250cm9sIiwiaHRtbCIsImFwcGVuZCIsImFqYXgiLCJjb21wbGV0ZSIsImFkZEdyYWRlcyIsImJpbmQiLCIkc2Vjb25kX3NsaWRlcl9lbGVtIiwiJHRoaXJkX3NsaWRlcl9lbGVtIiwiJHNlY29uZF9zbGlkZXJfY29udHJvbHMiLCJmaW5kIiwiJHRoaXJkX3NsaWRlcl9jb250cm9scyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCIkdGhpcyIsIiRwYWdlSXRlbXMiLCIkYWN0aXZlUGFnZSIsImZpbHRlciIsIiR0YXJnZXQiLCJmaXJzdCIsInJlbW92ZUNsYXNzIiwiZWFjaCIsImkiLCJlbCIsImdldCIsInNpYmxpbmdzIiwiYWRkQ2xhc3MiLCJ0YXJnZXRQYWdlIiwiYXR0ciIsImFjdGl2ZVBhZ2UiLCJvbmUiLCJzZXRUaW1lb3V0IiwiY2Fyb3VzZWwiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJvbiIsImZvcndhcmRzIiwiZGlyZWN0aW9uIiwiJHBhZ2VzIiwibGVuZ3RoIiwiY3NzIiwidW5pdCIsIiR1bml0cyIsImVxIiwiaGFzQ2xhc3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsInN1YnVuaXQiLCJhY3Rpb24iLCJnZXRBdHRyaWJ1dGUiLCJldmFsIiwibWFpblBhZ2UiLCJib29rSW5mbyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJjcmVhdGVUZXh0Tm9kZSIsImFwcGVuZENoaWxkIiwidW5pdHMiLCJhdXhVbml0cyIsInNsaWNlIiwicGFnZU51bWJlciIsImNhcm91c2VsVGFyZ2V0IiwicGFnZXMiLCJNYXRoIiwiY2VpbCIsImV2ZW5Vbml0c051bWJlciIsInB1c2giLCJpbmRleCIsIm5ld1BhZ2UiLCJjbG9zZVBhZ2UiLCJpc0ZpbGxlZCIsInN1YnVuaXRzIiwicmVzb3VyY2VzIiwianVzdEZpbGwiLCJPYmplY3QiLCJrZXlzIiwiY2xhc3NTdHJpbmciLCJhdHRyaWJ1dGVTdHJpbmciLCJwYWdlSWQiLCJkZWZhdWx0QmciLCJtYXRjaCIsImJnVXJsIiwiZGVmYXVsdFVuaXRJbWFnZSIsImlubmVySFRNTCIsImNhcm91c2VsaXplIiwicXVlcnlTZWxlY3RvciIsImlkIiwiaXNBY3RpdmUiLCJ0X3N1YnVuaXRzIiwiX2NyZWF0ZUFjdGl2aXR5RWxlbWVudCIsImNyZWF0ZUFjdGl2aXR5RWxlbWVudCIsInRleHR3ZWIiLCJhY3Rpdml0eSIsIm9jdWx0YXIiLCJvdXRlckhUTUwiLCJhdHRyTmFtZSIsInNldEF0dHJpYnV0ZSIsIl9hZGRHcmFkZSIsImFjdGl2aXR5T2JqIiwidW5kZWZpbmVkIiwibm90YSIsIndyYXBwZXIiLCJpZEFjdGl2aWRhZCIsImFjdGl2aWRhZGVzIiwiYWN0aXZpZGFkIiwiY29uZmlnIiwiY2xhc3NOYW1lIiwiJGVsZW1lbnQiLCJkZWZhdWx0Q29uZmlnIiwiY3ljbGUiLCJyaWRlIiwicGF1c2UiLCJjb250cm9sTGVmdCIsImNvbnRyb2xSaWdodCIsImNvbmNhdCIsInByZXBlbmQiLCJhY3Rpdml0eVdyYXBwZXIiLCJpbmNsdWRlSG9tZXdvcmtJY29uIiwiY2FuQmVIb21ld29yayIsImljb25XcmFwcGVyIiwiaW1hZ2UiLCJzdXBwb3J0c1Rhc2tzIiwic2NyaXB0VGFnIiwic2NyaXB0Q29kZSIsIm9ubHlWaXNpYmxlVGVhY2hlcnMiLCJpbm5lclRleHQiLCJkYXRhV3JhcHBlciIsImFuY2hvciIsInRpdGxlRWwiLCJ0aXRsZVRleHQiLCJwcmVsb2FkSW1hZ2UiLCJ1cmwiLCJjYWxsYmFjayIsIm9uRXJyb3IiLCJwcmVsb2FkZXIiLCJmdWxsQ2FsbGJhY2siLCJyZXF1aXJlIiwiVGh1bmRlckNsb25hYmxlU3R5bGUiLCJhcHBseSIsImFyZ3VtZW50cyIsInBhcmVudCIsImJvZHlDbGFzc05hbWUiLCJleHRyYVBsdWdpbnMiLCJja0VkaXRvclN0eWxlcyIsImNhbGwiLCJyZW1vdmVGaW5hbFNsaWRlIiwib3ZlcnJpZGVzIiwiXyIsImV4dGVuZCIsInQiLCJ0aGlzU3R5bGUiLCJjdXJyZW50U3R5bGUiXSwibWFwcGluZ3MiOiI7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SSxDQUFELElBQU87QUFDeEIsUUFBSUMsU0FBUyxHQUFHeEwsS0FBSyxDQUFDOEgsUUFBTixDQUFlMkQsWUFBL0I7QUFDQUQsYUFBUyxDQUFDVixNQUFWLENBQWlCSyxnQkFBakIsQ0FBa0NELElBQWxDLENBQXVDTSxTQUFTLENBQUNWLE1BQWpELEVBQXlEVSxTQUF6RCxFQUFvRSxJQUFwRTtBQUNBO0FBSmlCLENBQW5CO0FBTWVKLHdFQUFmLEU7Ozs7Ozs7Ozs7O0FDVkE7QUFDQSxPQUFPLEtBQVUsRUFBRSxrQkFLZCIsImZpbGUiOiJzdHlsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8qXHJcbiogICBBcnJheSBjb24gbGEgZGVmaW5pY2nDs24gZGUgbG9zIGVzdGlsb3MgcGFyYSBlbCBlZGl0b3IgZGUgQ0tFZGl0b3JcclxuKi9cclxuXHJcbmNvbnN0IGNrZVN0eWxlcyA9IFtcclxuXHR7IG5hbWU6ICdDYWphIDEnLCB0eXBlOiAnd2lkZ2V0Jywgd2lkZ2V0OiAnYmxpbmtfYm94JywgYXR0cmlidXRlczogeyAnY2xhc3MnOiAnYm94LTEnIH0gfSxcclxuXHR7IG5hbWU6ICdDYWphIDInLCB0eXBlOiAnd2lkZ2V0Jywgd2lkZ2V0OiAnYmxpbmtfYm94JywgYXR0cmlidXRlczogeyAnY2xhc3MnOiAnYm94LTInIH0gfSxcclxuXHR7IG5hbWU6ICfDiW5mYXNpcycsIGVsZW1lbnQ6ICdzcGFuJywgYXR0cmlidXRlczogeyAnY2xhc3MnOiAnYmNrLWVuZmFzaXMnIH19XHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBja2VTdHlsZXM7XHJcbiIsIihmdW5jdGlvbigpIHtcblx0dmFyIEhvbWVwYWdlID0gZnVuY3Rpb24oZGF0YSkge1xuXHRcdGlmICghZGF0YSkgcmV0dXJuIG5ldyBFcnJvcignTm8gZGF0YSBkZWZpbmVkJyk7XG5cdFx0dGhpcy5EQVRBX0xPQURFRCA9IGRhdGE7XG5cdFx0dGhpcy5JVEVNU19QRVJfUEFHRSA9IHRoaXMuREFUQV9MT0FERUQubnVtX2l0ZW1zO1xuXHRcdHRoaXMuU1RZTEUgPSBibGluay50aGVtZS5zdHlsZXMudGh1bmRlci5wcm90b3R5cGU7IC8vIE9qaXRvIGNvbiBlc3RvXG5cblx0XHR0aGlzLmRhdGEgPSB0aGlzLkRBVEFfTE9BREVELmRhdGE7XG5cdFx0dGhpcy5wcmV2QWN0aXZpdHkgPSBwYXJzZUludCh3aW5kb3cubG9jYXRpb24uaGFzaC5yZXBsYWNlKHRoaXMuU1RZTEUudW5pdEhhc2hQcmVmaXgsIFwiXCIpKTtcblx0XHR0aGlzLmZyb21BY3Rpdml0eSA9ICFpc05hTih0aGlzLnByZXZBY3Rpdml0eSk7XG5cdFx0dGhpcy5tYWluQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbGlkZXJcIik7XG5cdFx0dGhpcy4kbWFpbkNvbnRhaW5lciA9ICQodGhpcy5tYWluQ29udGFpbmVyKTtcblx0XHR0aGlzLmxheW91dERhdGEgPSB7XG5cdFx0XHRmaWxsZWRVbml0czogW11cblx0XHR9XG5cdH1cblxuXHRIb21lcGFnZS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBvdmVybGF5ID0gdGhpcy5jcmVhdGVFbGVtZW50KCdESVYnLCB7J2NsYXNzJzogJ292ZXJsYXktYmFja2dyb3VuZCd9KSwgLy8gVHJhbnNsdWNpZCBwdXJwbGUgbWFzay5cblx0XHRcdGZpcnN0UGFnZSA9IHRoaXMuZ2V0Rmlyc3RwYWdlSHRtbCgpLFxuXHRcdFx0c2Vjb25kUGFnZSA9IHRoaXMuZ2V0U2Vjb25kcGFnZUh0bWwoKSxcblx0XHRcdHRoaXJkUGFnZSA9IHRoaXMuZ2V0VGhpcmRwYWdlSHRtbCgpLFxuXHRcdFx0bGVmdENvbnRyb2wgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ1NQQU4nLCB7J2NsYXNzJzogJ21haW5fcGFnZS1zbGlkZXJfY29udHJvbCBwcmV2IGZhIGZhLWNoZXZyb24tbGVmdCAnICsgKHRoaXMuZnJvbUFjdGl2aXR5ID8gJ2FjdGl2ZScgOiAnJyl9KSxcblx0XHRcdHJpZ2h0Q29udHJvbCA9IHRoaXMuY3JlYXRlRWxlbWVudCgnU1BBTicsIHsnY2xhc3MnOiAnbWFpbl9wYWdlLXNsaWRlcl9jb250cm9sIG5leHQgZmEgZmEtY2hldnJvbi1yaWdodCAnICsgKCF0aGlzLmZyb21BY3Rpdml0eSA/ICdhY3RpdmUnIDogJycpfSk7XG5cblx0XHR0aGlzLiRtYWluQ29udGFpbmVyXG5cdFx0XHQuaHRtbCgnJylcblx0XHRcdC5hcHBlbmQob3ZlcmxheSwgZmlyc3RQYWdlLCBzZWNvbmRQYWdlLCB0aGlyZFBhZ2UsIGxlZnRDb250cm9sLCByaWdodENvbnRyb2wpO1xuXG5cdFx0JC5hamF4KHtcblx0XHRcdGNvbXBsZXRlOiAoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHRoaXMuYWRkR3JhZGVzKCk7XG5cdFx0XHR9KS5iaW5kKHRoaXMpXG5cdFx0fSk7XG5cblx0XHQkc2Vjb25kX3NsaWRlcl9lbGVtID0gJChzZWNvbmRQYWdlKTtcblx0XHQkdGhpcmRfc2xpZGVyX2VsZW0gPSAkKHRoaXJkUGFnZSk7XG5cdFx0JHNlY29uZF9zbGlkZXJfY29udHJvbHMgPSAkc2Vjb25kX3NsaWRlcl9lbGVtLmZpbmQoJy5zbGlkZXJfY29udHJvbCcpO1xuXHRcdCR0aGlyZF9zbGlkZXJfY29udHJvbHMgPSAkdGhpcmRfc2xpZGVyX2VsZW0uZmluZCgnLnNsaWRlcl9jb250cm9sJyk7XG5cblx0XHQvLyBMZWZ0L3JpZ2h0IHNsaWRlciBjb250cm9scyAtIG1haW4gcGFnZS5cblx0XHRsZWZ0Q29udHJvbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdHZhciAkdGhpcyA9ICQodGhpcyksXG5cdFx0XHRcdCRwYWdlSXRlbXMgPSAkKFtmaXJzdFBhZ2UsIHNlY29uZFBhZ2UsIHRoaXJkUGFnZV0pLFxuXHRcdFx0XHQkYWN0aXZlUGFnZSA9ICRwYWdlSXRlbXMuZmlsdGVyKCcuYWN0aXZlJyksXG5cdFx0XHRcdCR0YXJnZXQgPSAkcGFnZUl0ZW1zLmZpcnN0KCk7XG5cblx0XHRcdCRhY3RpdmVQYWdlXG5cdFx0XHRcdC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cblx0XHRcdCRwYWdlSXRlbXMuZWFjaChmdW5jdGlvbihpLCBlbCkge1xuXHRcdFx0XHRpZiAoJGFjdGl2ZVBhZ2UuZ2V0KDApID09PSBlbCAmJiBpID4gMCkge1xuXHRcdFx0XHRcdCR0YXJnZXQgPSAkKCRwYWdlSXRlbXMuZ2V0KC0taSkpO1xuXG5cdFx0XHRcdFx0c3dpdGNoKGkpIHtcblx0XHRcdFx0XHRcdGNhc2UgMDogLy8gUmVkaXJlY3RzIHRvIHRoZSBNYWluIFBhZ2UuXG5cdFx0XHRcdFx0XHRcdCR0aGlzXG5cdFx0XHRcdFx0XHRcdFx0LnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0XHRcdFx0JHRoaXNcblx0XHRcdFx0XHRcdFx0XHQuc2libGluZ3MoJy5uZXh0Jylcblx0XHRcdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2FjdGl2ZScpXG5cdFx0XHRcdFx0XHRcdCR0YXJnZXRcblx0XHRcdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdGNhc2UgMTogLy8gUmVkaXJlY3RzIHRvIHRoZSBzZWNvbmQgcGFnZS5cblx0XHRcdFx0XHRcdFx0dmFyIHRhcmdldFBhZ2UgPSAkYWN0aXZlUGFnZS5maW5kKCcuaXRlbS5hY3RpdmUnKS5hdHRyKCdkYXRhLXBhZ2UnKSxcblx0XHRcdFx0XHRcdFx0XHRhY3RpdmVQYWdlID0gJHRhcmdldC5maW5kKCcuaXRlbS5hY3RpdmUnKS5hdHRyKCdkYXRhLXBhZ2UnKTtcblxuXHRcdFx0XHRcdFx0XHQvLyBJZiB0aGUgdGFyZ2V0IHBhZ2UgaXMgbm90IHRoZSBhY3RpdmUgcGFnZSwgd2Ugc2hvdWxkIHNob3cgdGhlIHBhZ2UgdGhhdCBjb250YWluc1xuXHRcdFx0XHRcdFx0XHQvLyB0aGUgbGFzdCB2aXNpdGVkIHVuaXQuXG5cdFx0XHRcdFx0XHRcdCh0YXJnZXRQYWdlICE9PSBhY3RpdmVQYWdlKVxuXHRcdFx0XHRcdFx0XHRcdD8gJHNlY29uZF9zbGlkZXJfZWxlbVxuXHRcdFx0XHRcdFx0XHRcdFx0Lm9uZSgnc2xpZC5icy5jYXJvdXNlbCcsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCR0YXJnZXRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC5hZGRDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0sIDEwMCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHRcdFx0LmNhcm91c2VsKHBhcnNlSW50KHRhcmdldFBhZ2UpKVxuXHRcdFx0XHRcdFx0XHRcdDogJHRhcmdldFxuXHRcdFx0XHRcdFx0XHRcdFx0LmFkZENsYXNzKCdhY3RpdmUnKTtcblxuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0fSk7XG5cblx0XHRyaWdodENvbnRyb2wuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG5cdFx0XHQvLyBIaWRlIEZpcnN0IFBhZ2UgRWxlbWVudHNcblx0XHRcdGZpcnN0UGFnZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcblx0XHRcdHRoaXMuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG5cblx0XHRcdC8vIFNob3cgU2Vjb25kIHBhZ2UgZWxlbWVudHNcblx0XHRcdHNlY29uZFBhZ2UuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cdFx0XHRsZWZ0Q29udHJvbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblx0XHR9KTtcblxuXHRcdC8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXHRcdC8vIENhcm91c2VsIGV2ZW50cyAvL1xuXHRcdC8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXHRcdCRzZWNvbmRfc2xpZGVyX2VsZW0uYWRkKCR0aGlyZF9zbGlkZXJfZWxlbSkub24oJ3NsaWRlLmJzLmNhcm91c2VsJywgZnVuY3Rpb24oZSkge1xuXHRcdFx0dmFyICR0aGlzID0gJCh0aGlzKSxcblx0XHRcdFx0Zm9yd2FyZHMgPSBlLmRpcmVjdGlvbiA9PT0gJ2xlZnQnLFxuXHRcdFx0XHQkdGFyZ2V0ID0gJHRoaXMuZmluZChmb3J3YXJkcyA/ICcuZmEubmV4dCcgOiAnLmZhLnByZXYnKTtcblxuXHRcdFx0Ly8gRGVwZW5kaW5nIG9uIHRoZSBjYXJvdXNlbCBkaXJlY2lvbiwgd2Ugc2hvdyBvciBoaWRlIHRoZSBzbGlkZXIgY29udHJvbHMgb24gYm90aFxuXHRcdFx0Ly8gdGhlIHNlY29uZCBhbmQgdGhlIHRoaXJkIHBhZ2VzIGluIGNhc2Ugd2UgcmVhY2ggdGhlIGZpcnMgZWxlbWVudCBvciB0aGUgbGFzdFxuXHRcdFx0Ly8gZWxlbWVudCBvZiB0aGUgY2Fyb3VzZWwuXG5cdFx0XHQkdGhpcy5vbmUoJ3NsaWQuYnMuY2Fyb3VzZWwnLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdHZhciAkcGFnZXMgPSAkdGhpcy5maW5kKCcuaXRlbScpO1xuXG5cdFx0XHRcdCRwYWdlc1xuXHRcdFx0XHRcdC5maWx0ZXIoJy5hY3RpdmU6JyArIChmb3J3YXJkcyA/ICdsYXN0JyA6ICdmaXJzdCcpICsgJy1vZi10eXBlJykubGVuZ3RoICE9PSAwXG5cdFx0XHRcdFx0XHQ/ICR0YXJnZXRcblx0XHRcdFx0XHRcdFx0LmFkZENsYXNzKCdpbnZpc2libGUnKVxuXHRcdFx0XHRcdFx0XHQuc2libGluZ3MoJy5mYScpXG5cdFx0XHRcdFx0XHRcdFx0LnJlbW92ZUNsYXNzKCdpbnZpc2libGUnKVxuXHRcdFx0XHRcdFx0OiAkdGFyZ2V0LmFkZCgkdGFyZ2V0LnNpYmxpbmdzKCcuZmEnKSlcblx0XHRcdFx0XHRcdFx0LnJlbW92ZUNsYXNzKCdpbnZpc2libGUnKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy4kbWFpbkNvbnRhaW5lclxuXHRcdFx0LmNzcygnb3ZlcmZsb3cnLCAnYXV0bycpO1xuXG5cdFx0Ly8gRGVwZW5kaW5nIG9uIHdoaWNoIGNhcm91c2VsIGVsZW1lbnQgaXMgc2hvd24sIHdlIHNob3cgb3IgaGlkZSB0aGUgc2xpZGVyIGNvbnRyb2xzXG5cdFx0Ly8gb24gdGhlIHNlY29uZCBwYWdlLlxuXHRcdCR0aGlyZF9zbGlkZXJfZWxlbVxuXHRcdFx0LmZpbmQoJy5pdGVtLmFjdGl2ZTpmaXJzdC1vZi10eXBlJykubGVuZ3RoID09IDBcblx0XHRcdFx0JiYgJHRoaXJkX3NsaWRlcl9lbGVtXG5cdFx0XHRcdFx0LmZpbmQoJy5mYS5wcmV2Jylcblx0XHRcdFx0XHRcdC5yZW1vdmVDbGFzcygnaW52aXNpYmxlJylcblx0XHQkdGhpcmRfc2xpZGVyX2VsZW1cblx0XHRcdC5maW5kKCcuaXRlbS5hY3RpdmU6bGFzdC1vZi10eXBlJykubGVuZ3RoICE9IDBcblx0XHRcdFx0JiYgJHRoaXJkX3NsaWRlcl9lbGVtXG5cdFx0XHRcdFx0LmZpbmQoJy5mYS5uZXh0Jylcblx0XHRcdFx0XHRcdC5hZGRDbGFzcygnaW52aXNpYmxlJyk7XG5cblx0XHQvLy8vLy8vLy8vLy9cblx0XHQvLyBFdmVudHMgLy9cblx0XHQvLy8vLy8vLy8vLy9cblx0XHQvLyBVbml0IGJ1dHRvbi5cblx0XHQkc2Vjb25kX3NsaWRlcl9lbGVtLmZpbmQoJy51bml0Om5vdCguZW1wdHkpJykuYmluZChcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHVuaXQgPSAkKHRoaXMpLmF0dHIoXCJkYXRhLXVuaXRcIiksXG5cdFx0XHRcdCR1bml0cyA9ICR0aGlyZF9zbGlkZXJfZWxlbS5maW5kKCcuaXRlbScpO1xuXG5cdFx0XHQkc2Vjb25kX3NsaWRlcl9lbGVtXG5cdFx0XHRcdC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cblx0XHRcdCR0aGlyZF9zbGlkZXJfZWxlbS5jYXJvdXNlbChwYXJzZUludCh1bml0KSk7XG5cblx0XHRcdC8vIElmIHRoZSB0YXJnZXQgdW5pdCBpcyBub3QgdGhlIGFjdGl2ZSBvbmUsIHdlIHNob3VsZCBjYXJvdXNlbCB0byBpdFxuXHRcdFx0Ly8gYmVmb3JlIHNob3dpbmcgaXQuXG5cdFx0XHQkdW5pdHMuZXEodW5pdCkuaGFzQ2xhc3MoJ2FjdGl2ZScpXG5cdFx0XHRcdD8gJHRoaXJkX3NsaWRlcl9lbGVtXG5cdFx0XHRcdFx0LmFkZENsYXNzKCdhY3RpdmUnKVxuXHRcdFx0XHQ6ICR0aGlyZF9zbGlkZXJfZWxlbS5vbmUoJ3NsaWQuYnMuY2Fyb3VzZWwnLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0JHRoaXJkX3NsaWRlcl9lbGVtXG5cdFx0XHRcdFx0XHRcdC5hZGRDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHRcdFx0fSwgMTAwKTtcblx0XHRcdFx0fSk7XG5cdFx0fSk7XG5cdFx0Ly8gU3VidW5pdCBidXR0b24uXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImEuYWN0aXZpdHktdGV4dC1kYXRhXCIpLmZvckVhY2goZnVuY3Rpb24oc3VidW5pdCkge1xuXHRcdFx0c3VidW5pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuXHRcdFx0XHR2YXIgYWN0aW9uID0gc3VidW5pdC5nZXRBdHRyaWJ1dGUoXCJkYXRhLW9uY2xpY2tcIik7XG5cdFx0XHRcdGV2YWwoYWN0aW9uKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9XG5cblx0Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cdC8vIEZpcnN0IHBhZ2UgLSBMYW5kaW5nLiAvL1xuXHQvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblx0SG9tZXBhZ2UucHJvdG90eXBlLmdldEZpcnN0cGFnZUh0bWwgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgbWFpblBhZ2UgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ0RJVicsIHsnaWQnOiAnbWFpbl9wYWdlJywgJ2NsYXNzJzogKCF0aGlzLmZyb21BY3Rpdml0eSA/ICdhY3RpdmUnIDogJycpICsgJyBwYWdlLWl0ZW0nfSk7XG5cblx0XHQvLyBCb29rIGluZm8uXG5cdFx0dmFyIGJvb2tJbmZvID0gdGhpcy5jcmVhdGVFbGVtZW50KCdESVYnLCB7J2NsYXNzJzogJ2Jvb2staW5mbyd9KSxcblx0XHRcdHRpdGxlID0gdGhpcy5jcmVhdGVFbGVtZW50KCdIMScpLFxuXHRcdFx0ZGVzY3JpcHRpb24gPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ0RJVicsIHsnY2xhc3MnOiAnZGVzY3JpcHRpb24nfSk7XG5cblx0XHR0aXRsZS5hcHBlbmQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGhpcy5kYXRhW1widGl0bGVcIl0pKTtcblxuXHRcdGRlc2NyaXB0aW9uLmFwcGVuZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0aGlzLmRhdGFbXCJkZXNjcmlwdGlvblwiXSkpO1xuXG5cdFx0bWFpblBhZ2UuYXBwZW5kQ2hpbGQoYm9va0luZm8pLmFwcGVuZCh0aXRsZSwgZGVzY3JpcHRpb24pXG5cblx0XHRyZXR1cm4gbWFpblBhZ2U7XG5cdH07XG5cblx0Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblx0Ly8gU2Vjb25kIHBhZ2UgLSBDYXJvdXNlbCBvZiB1bml0cy4gLy9cblx0Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblx0SG9tZXBhZ2UucHJvdG90eXBlLmdldFNlY29uZHBhZ2VIdG1sID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGh0bWwgPSAnJyxcblx0XHRcdHVuaXRzID0gdGhpcy5kYXRhW1widW5pdHNcIl0sXG5cdFx0XHRhdXhVbml0cyA9IHVuaXRzLnNsaWNlKCksXG5cdFx0XHRwYWdlTnVtYmVyO1xuXG5cdFx0Ly8gUmVxdWlyZWQgRWxlbWVudHNcblx0XHR2YXIgc2Vjb25kUGFnZSA9IHRoaXMuY3JlYXRlRWxlbWVudCgnRElWJywgeydpZCc6ICdzZWNvbmRfcGFnZScsICdjbGFzcyc6ICdjYXJvdXNlbCBzbGlkZSBjYXJvdXNlbC1mYWRlIHBhZ2UtaXRlbScsICdkYXRhLWludGVydmFsJzogJ2ZhbHNlJ30pLFxuXHRcdFx0Y2Fyb3VzZWxUYXJnZXQgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ0RJVicsIHsnaWQnOiAnc2Vjb25kX3BhZ2UnLCAnY2xhc3MnOiAnY2Fyb3VzZWwtaW5uZXInfSk7XG5cblx0XHQvLyBJZiB0aGVyZSBhcmVuJ3QgZW5vdWdoIHVuaXRzIHRvIGZpbGwgdGhlIGxhc3QgcGFnZSwgd2UgdXNlIGVtcHR5IG9iamVjdHMgdG8gZmlsbFxuXHRcdC8vIHRoYXQgc3BhY2VzIGFuZCBtYWtlIGZsZXgtYm94IHdvcmsgZmluZS5cblx0XHR2YXIgcGFnZXMgPSBNYXRoLmNlaWwodW5pdHMubGVuZ3RoIC8gdGhpcy5JVEVNU19QRVJfUEFHRSksXG5cdFx0XHRldmVuVW5pdHNOdW1iZXIgPSBwYWdlcyA+IDEgPyAoTWF0aC5jZWlsKHVuaXRzLmxlbmd0aCAvIHRoaXMuSVRFTVNfUEVSX1BBR0UpICogdGhpcy5JVEVNU19QRVJfUEFHRSkgOiB1bml0cy5sZW5ndGg7XG5cblx0XHRpZiAodW5pdHMubGVuZ3RoIDwgZXZlblVuaXRzTnVtYmVyKSB7XG5cdFx0XHR3aGlsZSAoYXV4VW5pdHMubGVuZ3RoIDwgZXZlblVuaXRzTnVtYmVyKSB7XG5cdFx0XHRcdGF1eFVuaXRzLnB1c2goe30pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGF1eFVuaXRzLmZvckVhY2goKGZ1bmN0aW9uKHVuaXQsIGluZGV4KSB7XG5cdFx0XHR2YXIgbmV3UGFnZSA9IGluZGV4ICUgdGhpcy5JVEVNU19QRVJfUEFHRSA9PSAwLFxuXHRcdFx0XHRjbG9zZVBhZ2UgPSAoaW5kZXggKyAxKSAlIHRoaXMuSVRFTVNfUEVSX1BBR0UgPT0gMCB8fCBpbmRleCArIDEgPT09IGF1eFVuaXRzLmxlbmd0aCxcblx0XHRcdFx0aXNGaWxsZWQgPSB0eXBlb2YgdW5pdC5zdWJ1bml0cyAhPT0gJ3VuZGVmaW5lZCcgJiYgKHVuaXQuc3VidW5pdHMubGVuZ3RoID4gMCB8fCB1bml0LnJlc291cmNlcy5sZW5ndGggPiAwKSxcblx0XHRcdFx0anVzdEZpbGwgPSBPYmplY3Qua2V5cyh1bml0KS5sZW5ndGggPT09IDAsIC8vIGNvbXByb2JhbW9zIHF1ZSBubyBzZWEgdW5hIGFjdGl2aWRhZCBkZSByZWxsZW5vLlxuXHRcdFx0XHRjbGFzc1N0cmluZyA9ICd1bml0IGVtcHR5JyArIChqdXN0RmlsbCA/ICcgZmlsbC11bml0JyA6ICcnKSxcblx0XHRcdFx0YXR0cmlidXRlU3RyaW5nID0gJyc7XG5cblx0XHRcdCghcGFnZU51bWJlciAmJiB0eXBlb2YgcGFnZU51bWJlciA9PT0gJ3VuZGVmaW5lZCcpICAvLyBJZiBwYWdlTnVtYmVyIGlzIHVuZGVmaW5lZCwgd2Ugc2V0IGl0IHRvIDAuXG5cdFx0XHRcdD8gKHBhZ2VOdW1iZXIgPSAwKVxuXHRcdFx0XHQ6IG5ld1BhZ2UgJiYgKCsrcGFnZU51bWJlcik7IC8vIEVsc2UsIGlmIHdlJ3JlIGNyZWF0aW5nIGEgbmV3IHBhZ2UsIHdlIHNob3VsZCBpbmNyZWFzZSBpdC5cblxuXHRcdFx0aWYgKGlzRmlsbGVkKSB7XG5cdFx0XHRcdGNsYXNzU3RyaW5nID0gY2xhc3NTdHJpbmcucmVwbGFjZSgnIGVtcHR5JywgJycpO1xuXHRcdFx0XHRhdHRyaWJ1dGVTdHJpbmcgPSAnZGF0YS11bml0PVwiJyArIHRoaXMubGF5b3V0RGF0YS5maWxsZWRVbml0cy5sZW5ndGggKyAnXCInO1xuXHRcdFx0XHR1bml0LnBhZ2VJZCA9IHBhZ2VOdW1iZXI7XG5cdFx0XHRcdHRoaXMubGF5b3V0RGF0YS5maWxsZWRVbml0cy5wdXNoKHVuaXQpO1xuXHRcdFx0fVxuXG5cdFx0XHRodG1sICs9IG5ld1BhZ2Vcblx0XHRcdFx0PyAnPGRpdiBjbGFzcz1cIml0ZW0gJyArIChpbmRleCA9PSAwID8gJ2FjdGl2ZScgOiAnJykgKyAnXCIgZGF0YS1wYWdlPVwiJyArIChwYWdlTnVtYmVyKSArICdcIj4nXG5cdFx0XHRcdDogJyc7XG5cblx0XHRcdFx0aHRtbCArPSAnPGRpdiBjbGFzcz1cIicgKyBjbGFzc1N0cmluZyArICdcIiAnICsgYXR0cmlidXRlU3RyaW5nICsgJ1wiPic7XG5cdFx0XHRcdFx0aWYgKCFqdXN0RmlsbCkge1xuXHRcdFx0XHRcdFx0dmFyIGRlZmF1bHRCZyA9IHVuaXRbXCJpbWFnZVwiXS5tYXRjaCgvXFwvaW1hZ2VzXFwvbGlicm9cXC92ZXJkZVxcLnBuZy9nKSAhPT0gbnVsbFxuXHRcdFx0XHRcdFx0XHRiZ1VybCA9IGRlZmF1bHRCZyA/IHRoaXMuU1RZTEUuZGVmYXVsdFVuaXRJbWFnZSA6IHVuaXRbXCJpbWFnZVwiXTtcblx0XHRcdFx0XHRcdGh0bWwgKz0gJzxkaXYgY2xhc3M9XCJpbWcnICsgKGRlZmF1bHRCZyA/ICcgZGVmYXVsdCcgOiAnJykgKyAnXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJyArIGJnVXJsICsgJylcIj48L2Rpdj4nO1xuXHRcdFx0XHRcdFx0aHRtbCArPSAnPGRpdiBjbGFzcz1cInVuaXQtaW5mb1wiPic7XG5cdFx0XHRcdFx0XHRcdGh0bWwgKz0gJzxoMj4nICsgdW5pdFtcInRpdGxlXCJdICsgJzwvaDI+Jztcblx0XHRcdFx0XHRcdFx0aHRtbCArPSAnPHAgdGl0bGU9XCInICsgdW5pdFtcImRlc2NyaXB0aW9uXCJdICsgJ1wiPicgKyB1bml0W1wiZGVzY3JpcHRpb25cIl0gKyAnPC9wPic7XG5cdFx0XHRcdFx0XHRodG1sICs9ICc8L2Rpdj4nO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0aHRtbCArPSAnPC9kaXY+JztcblxuXHRcdFx0aHRtbCArPSAoY2xvc2VQYWdlID8gJzwvZGl2PicgOiAnJyk7XG5cdFx0fSkuYmluZCh0aGlzKSk7XG5cdFx0Y2Fyb3VzZWxUYXJnZXQuaW5uZXJIVE1MID0gaHRtbDtcblxuXHRcdC8vIFdyYXAgZXZlcnl0aGluZyBpbnNpZGUgc2Vjb25kUGFnZS5cblx0XHRzZWNvbmRQYWdlLmFwcGVuZChjYXJvdXNlbFRhcmdldCk7XG5cblx0XHR0aGlzLmNhcm91c2VsaXplKHNlY29uZFBhZ2UsIHt9LCAnc2Vjb25kLXNsaWRlcl9jb250cm9sJyk7XG5cblx0XHQvLyBJZiB0aGVyZSBhcmUgbGVzcyB1bml0cyB0aGFuIGl0ZW1zIHBlciBwYWdlLCB3ZSBtdXN0IGhpZGUgdGhlIGNhcm91c2VsIGJ1dHRvbi5cblx0XHQoYXV4VW5pdHMubGVuZ3RoIDw9IHRoaXMuSVRFTVNfUEVSX1BBR0UpICYmIHNlY29uZFBhZ2UucXVlcnlTZWxlY3RvcignLm5leHQuZmEuZmEtY2hldnJvbi1yaWdodCcpLmNsYXNzTGlzdC5hZGQoJ2ludmlzaWJsZScpO1xuXG5cdFx0cmV0dXJuIHNlY29uZFBhZ2U7XG5cdH07XG5cblx0Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblx0Ly8gVGhpcmQgUGFnZSAtIExpc3Qgb2YgYWN0aXZpdGllcy4gLy9cblx0Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblx0SG9tZXBhZ2UucHJvdG90eXBlLmdldFRoaXJkcGFnZUh0bWwgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgaHRtbCA9ICcnXG5cdFx0XHR0aGlyZFBhZ2UgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ0RJVicsIHsnaWQnOiAndGhpcmRfcGFnZScsICdjbGFzcyc6ICdjYXJvdXNlbCBzbGlkZSBjYXJvdXNlbC1mYWRlIHBhZ2UtaXRlbSAnICsgKHRoaXMuZnJvbUFjdGl2aXR5ID8gJ2FjdGl2ZScgOiAnJyksICdkYXRhLWludGVydmFsJzogJ2ZhbHNlJ30pLFxuXG5cdFx0XHRodG1sICs9ICc8ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtaW5uZXJcIj4nO1xuXG5cdFx0XHRcdHRoaXMubGF5b3V0RGF0YS5maWxsZWRVbml0cy5mb3JFYWNoKChmdW5jdGlvbih1bml0LCBpbmRleCkge1xuXHRcdFx0XHRcdHRoaXMucHJldkFjdGl2aXR5ID09PSBwYXJzZUludCh1bml0LmlkKSB8fCAhdGhpcy5mcm9tQWN0aXZpdHkgJiYgaW5kZXggPT0gMFxuXHRcdFx0XHRcdFx0PyBpc0FjdGl2ZSA9ICcgYWN0aXZlJ1xuXHRcdFx0XHRcdFx0OiBpc0FjdGl2ZSA9ICcnO1xuXG5cdFx0XHRcdFx0dmFyIGRlZmF1bHRCZyA9IHVuaXRbXCJpbWFnZVwiXS5tYXRjaCgvXFwvaW1hZ2VzXFwvbGlicm9cXC92ZXJkZVxcLnBuZy9nKSAhPT0gbnVsbFxuXHRcdFx0XHRcdFx0YmdVcmwgPSBkZWZhdWx0QmcgPyB0aGlzLlNUWUxFLmRlZmF1bHRVbml0SW1hZ2UgOiB1bml0W1wiaW1hZ2VcIl07XG5cblx0XHRcdFx0XHRodG1sICs9ICc8ZGl2IGNsYXNzPVwiaXRlbScgKyBpc0FjdGl2ZSArICdcIiBkYXRhLXBhZ2U9XCInICsgdW5pdC5wYWdlSWQgKyAnXCIgZGF0YS11bml0PVwiJyArIHVuaXQuaWQgKyAnXCI+Jztcblx0XHRcdFx0XHRcdGh0bWwgKz0gJzxkaXYgY2xhc3M9XCJ1bml0XCI+JztcblxuXHRcdFx0XHRcdFx0XHQvLyBVbml0IGltYWdlLlxuXHRcdFx0XHRcdFx0XHRodG1sICs9ICc8ZGl2IGNsYXNzPVwiaW1nJyArIChkZWZhdWx0QmcgPyAnIGRlZmF1bHQnIDogJycpICsgJ1wiIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCcgKyBiZ1VybCArICcpXCI+PC9kaXY+JztcblxuXHRcdFx0XHRcdFx0XHQvLyBVbml0IGluZm8uXG5cdFx0XHRcdFx0XHRcdGh0bWwgKz0gJzxkaXYgY2xhc3M9XCJ1bml0LWluZm9cIj4nO1xuXHRcdFx0XHRcdFx0XHRcdGh0bWwgKz0gJzxoMj4nICsgdW5pdFtcInRpdGxlXCJdICsgJzwvaDI+Jztcblx0XHRcdFx0XHRcdFx0XHRodG1sICs9ICc8cD4nICsgdW5pdFtcImRlc2NyaXB0aW9uXCJdICsgJzxwPic7XG5cdFx0XHRcdFx0XHRcdGh0bWwgKz0gJzwvZGl2Pic7XG5cdFx0XHRcdFx0XHRodG1sICs9ICc8L2Rpdj4nO1xuXG5cdFx0XHRcdFx0XHQvLyBVbml0IGNvbnRlbnQuXG5cdFx0XHRcdFx0XHRodG1sICs9ICc8ZGl2IGNsYXNzPVwidW5pdF9jb250ZW50XCI+JztcblxuXG5cdFx0XHRcdFx0XHRcdHZhciBzdWJ1bml0cyA9IHVuaXRbXCJzdWJ1bml0c1wiXSxcblx0XHRcdFx0XHRcdFx0XHRyZXNvdXJjZXMgPSB1bml0W1wicmVzb3VyY2VzXCJdLFxuXHRcdFx0XHRcdFx0XHRcdHRfc3VidW5pdHMgPSBzdWJ1bml0cy5sZW5ndGggKyByZXNvdXJjZXMubGVuZ3RoLFxuXHRcdFx0XHRcdFx0XHRcdF9jcmVhdGVBY3Rpdml0eUVsZW1lbnQgPSB0aGlzLmNyZWF0ZUFjdGl2aXR5RWxlbWVudC5iaW5kKHRoaXMpO1xuXG5cdFx0XHRcdFx0XHRcdC8vIElmIHRoZXJlIGFyZSBzdWJ1bml0cywgd2UgYWRkIHRoZSBzdWJ1bml0cyBjb250YWluZXIuXG5cdFx0XHRcdFx0XHRcdHN1YnVuaXRzLmxlbmd0aCA+IDAgJiYgKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHRcdGh0bWwgKz0gJzxoMyBjbGFzcz1cInN1YnVuaXRzLWhlYWRlclwiPicgKyB0ZXh0d2ViKFwiY291cnNlX3VuaXRfYWN0aXZpdGllc1wiKSArICc8L2gzPic7XG5cdFx0XHRcdFx0XHRcdFx0aHRtbCArPSAnPGRpdiBjbGFzcz1cImFjdGl2aXRpZXMtbGlzdFwiPic7XG5cdFx0XHRcdFx0XHRcdFx0XHRzdWJ1bml0cy5mb3JFYWNoKGZ1bmN0aW9uKGFjdGl2aXR5KSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCFhY3Rpdml0eS5vY3VsdGFyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0JiYgKGh0bWwgKz0gX2NyZWF0ZUFjdGl2aXR5RWxlbWVudChhY3Rpdml0eSkub3V0ZXJIVE1MKTtcblx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdGh0bWwgKz0gJzwvZGl2Pic7XG5cdFx0XHRcdFx0XHRcdH0pKCk7XG5cblx0XHRcdFx0XHRcdFx0Ly8gSWYgdGhlcmUgYXJlIHJlc291cmNlcywgd2UgYWRkIHRoZSByZXNvdXJjZXMgY29udGFpbmVyLlxuXHRcdFx0XHRcdFx0XHRyZXNvdXJjZXMubGVuZ3RoID4gMCAmJiAoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdFx0aHRtbCArPSAnPGgzIGlkPVwicmVzb3VyY2VzLWhlYWRlclwiPicgKyB0ZXh0d2ViKCdjb3Vyc2Vfc3VwcGxlbWVudF9jb250ZW50JykgKyAnPC9oMz4nO1xuXHRcdFx0XHRcdFx0XHRcdGh0bWwgKz0gJzxkaXYgY2xhc3M9XCJhY3Rpdml0aWVzLWxpc3RcIj4nO1xuXHRcdFx0XHRcdFx0XHRcdFx0cmVzb3VyY2VzLmZvckVhY2goZnVuY3Rpb24oYWN0aXZpdHkpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0IWFjdGl2aXR5Lm9jdWx0YXJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQmJiAoaHRtbCArPSBfY3JlYXRlQWN0aXZpdHlFbGVtZW50KGFjdGl2aXR5KS5vdXRlckhUTUwpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0aHRtbCArPSAnPC9kaXY+Jztcblx0XHRcdFx0XHRcdFx0fSkoKTtcblx0XHRcdFx0XHRcdGh0bWwgKz0gJzwvZGl2Pic7XG5cdFx0XHRcdFx0aHRtbCArPSAnPC9kaXY+Jztcblx0XHRcdFx0fSkuYmluZCh0aGlzKSk7XG5cblx0XHRcdGh0bWwgKz0gJzwvZGl2Pic7XG5cblx0XHR0aGlyZFBhZ2UuaW5uZXJIVE1MID0gaHRtbDtcblxuXHRcdHRoaXMuY2Fyb3VzZWxpemUodGhpcmRQYWdlLCB7fSwgJ3RoaXJkLXNsaWRlcl9jb250cm9sJyk7XG5cblx0XHRyZXR1cm4gdGhpcmRQYWdlO1xuXHR9O1xuXG5cdEhvbWVwYWdlLnByb3RvdHlwZS5jcmVhdGVFbGVtZW50ID0gZnVuY3Rpb24odHlwZSwgYXR0cmlidXRlcykge1xuXHRcdHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcblxuXHRcdChhdHRyaWJ1dGVzICYmIHR5cGVvZiBhdHRyaWJ1dGVzID09PSAnb2JqZWN0JykgJiYgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbihhdHRyTmFtZSkge1xuXHRcdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ck5hbWUsIGF0dHJpYnV0ZXNbYXR0ck5hbWVdKVxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIGVsZW1lbnQ7XG5cdH07XG5cblx0SG9tZXBhZ2UucHJvdG90eXBlLmFkZEdyYWRlcyA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBfYWRkR3JhZGUgPSAoZnVuY3Rpb24oYWN0aXZpdHlPYmosIGlkKSB7XG5cdFx0XHRcdGlmICghYWN0aXZpdHlPYmogfHwgdHlwZW9mIGFjdGl2aXR5T2JqID09PSB1bmRlZmluZWQgfHwgYWN0aXZpdHlPYmogPT09IG51bGwgfHwgYWN0aXZpdHlPYmoubm90YSA9PT0gJycpIHJldHVybjtcblxuXHRcdFx0XHR2YXIgbm90YSA9IHRoaXMuY3JlYXRlRWxlbWVudCgnU1BBTicsIHsnY2xhc3MnOiAnbm90YSd9KSxcblx0XHRcdFx0XHR3cmFwcGVyID0gdGhpcy5tYWluQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWlkPVwiJyArIGlkICsgJ1wiXScpO1xuXG5cdFx0XHRcdHdyYXBwZXIuYXBwZW5kQ2hpbGQobm90YSkuYXBwZW5kKGFjdGl2aXR5T2JqLm5vdGEpO1xuXHRcdFx0fSkuYmluZCh0aGlzKTtcblxuXHRcdGZvciAodmFyIGlkQWN0aXZpZGFkIGluIHRoaXMuREFUQV9MT0FERUQuYWN0aXZpZGFkZXMpIHtcblx0XHRcdGlmIChpc05hTihwYXJzZUludChpZEFjdGl2aWRhZCkpKSByZXR1cm47XG5cdFx0XHR2YXIgYWN0aXZpZGFkID0gdGhpcy5EQVRBX0xPQURFRC5hY3RpdmlkYWRlc1tpZEFjdGl2aWRhZF07XG5cdFx0XHRfYWRkR3JhZGUoYWN0aXZpZGFkLCBpZEFjdGl2aWRhZCk7XG5cdFx0fVxuXHR9XG5cblx0SG9tZXBhZ2UucHJvdG90eXBlLmNhcm91c2VsaXplID0gZnVuY3Rpb24oZWxlbWVudCwgY29uZmlnLCBjbGFzc05hbWUpIHtcblx0XHR2YXIgJGVsZW1lbnQgPSAkKGVsZW1lbnQpLFxuXHRcdFx0ZGVmYXVsdENvbmZpZyA9IHtjeWNsZTogZmFsc2UsIHJpZGU6IGZhbHNlLCBwYXVzZTogZmFsc2V9LFxuXHRcdFx0Y29udHJvbExlZnQgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ1NQQU4nLCB7J2NsYXNzJzogJ3NsaWRlcl9jb250cm9sIHByZXYgZmEgZmEtY2hldnJvbi1sZWZ0IGludmlzaWJsZSd9KSxcblx0XHRcdGNvbnRyb2xSaWdodCA9IHRoaXMuY3JlYXRlRWxlbWVudCgnU1BBTicsIHsnY2xhc3MnOiAnc2xpZGVyX2NvbnRyb2wgbmV4dCBmYSBmYS1jaGV2cm9uLXJpZ2h0J30pO1xuXG5cdFx0aWYgKGNsYXNzTmFtZSkge1xuXHRcdFx0Y29udHJvbExlZnQuY2xhc3NOYW1lID0gY29udHJvbExlZnQuY2xhc3NOYW1lLmNvbmNhdCgnICcsIGNsYXNzTmFtZSk7XG5cdFx0XHRjb250cm9sUmlnaHQuY2xhc3NOYW1lID0gY29udHJvbFJpZ2h0LmNsYXNzTmFtZS5jb25jYXQoJyAnLCBjbGFzc05hbWUpO1xuXHRcdH1cblxuXHRcdCRlbGVtZW50XG5cdFx0XHQucHJlcGVuZChjb250cm9sTGVmdClcblx0XHRcdC5hcHBlbmQoY29udHJvbFJpZ2h0KTtcblxuXHRcdCRlbGVtZW50LmNhcm91c2VsKGRlZmF1bHRDb25maWcpO1xuXG5cdFx0Ly8gTGVmdC9yaWdodCBzbGlkZXIgY29udHJvbHNcblx0XHRjb250cm9sTGVmdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0JGVsZW1lbnQuY2Fyb3VzZWwoJ3ByZXYnKTtcblx0XHR9KTtcblx0XHRjb250cm9sUmlnaHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRcdCRlbGVtZW50LmNhcm91c2VsKCduZXh0Jyk7XG5cdFx0fSk7XG5cdH07XG5cdC8qKlxuXHQgKiBbY3JlYXRlQWN0aXZpdHlFbGVtZW50IENyZWEgdW4gZWxlbWVudG8gZGVsIGxpc3RhZG8gZGUgYWN0aXZpZGFkZXMgZGVsIHRlbWEgY29uIGxvcyBkYXRvcyBkZSB1bmEgYWN0aXZpZGFkLl1cblx0ICogQHBhcmFtICB7anNvbn0gYWN0aXZpdHkgRGF0b3MgZGUgbGEgYWN0aXZpZGFkLlxuXHQgKiBAcmV0dXJuIHtodG1sfSAgICAgICAgICBFbGVtZW50byBIVE1MIGRlbCBsaXN0YWRvIGRlIGFjdGl2aWRhZGVzLlxuXHQgKi9cblx0SG9tZXBhZ2UucHJvdG90eXBlLmNyZWF0ZUFjdGl2aXR5RWxlbWVudCA9IGZ1bmN0aW9uKGFjdGl2aXR5KSB7XG5cdFx0dmFyIGFjdGl2aXR5V3JhcHBlciA9IHRoaXMuY3JlYXRlRWxlbWVudCgnRElWJywgeydjbGFzcyc6ICdzdWJ1bml0JywgJ2RhdGEtaWQnOiBhY3Rpdml0eS5pZH0pO1xuXG5cdFx0Ly8gU2VuZCBob21ld29yayBidXR0b24uXG5cdFx0aWYgKHRoaXMuZGF0YS5pbmNsdWRlSG9tZXdvcmtJY29uICYmIGFjdGl2aXR5LmNhbkJlSG9tZXdvcmspIHtcblx0XHRcdHZhciBpY29uV3JhcHBlciA9IHRoaXMuY3JlYXRlRWxlbWVudCgnU1BBTicsIHsnY2xhc3MnOiAnaWNvbiBpY29uLWVudmlhcid9KSxcblx0XHRcdFx0aW1hZ2UgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ0lNRycsIHtcblx0XHRcdFx0XHQnc3JjJzogdGhpcy5kYXRhLnN1cHBvcnRzVGFza3MgPyAnL3RoZW1lcy9yZXNwb25zaXZlL2ltYWdlcy9saWJyby9pY29uczgtc2VuZC05MC5wbmcnIDogJy90aGVtZXMvcmVzcG9uc2l2ZS9pbWFnZXMvbGlicm8vYWN0aXYtaWNvbi1kZWJlcmVzLnBuZycsXG5cdFx0XHRcdFx0J2FsdCc6IHRoaXMuZGF0YS5zdXBwb3J0c1Rhc2tzID8gdGV4dHdlYignY291cnNlX2l0ZW1fc2VuZF90YXNrJykgOiB0ZXh0d2ViKCdjb3Vyc2VfaXRlbV9zZW5kX2hvbWV3b3JrJylcblx0XHRcdFx0fSk7XG5cblx0XHRcdGljb25XcmFwcGVyLmFwcGVuZChpbWFnZSk7XG5cblx0XHRcdC8vIENyZWFtb3MgbGEgZXRpcXVldGEgXCJzY3JpcHRcIiBhIGxhIHF1ZSBlc3RhcsOhIGFzb2NpYWRhIGxhIGFjY2nDs24gZGVsIGJvdMOzbiBkZSBlbnZpYXIgZGViZXJlcy5cblx0XHRcdHZhciBzY3JpcHRUYWcgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ1NDUklQVCcsIHsndHlwZSc6ICd0ZXh0L2phdmFzY3JpcHQnfSksXG5cdFx0XHRcdHNjcmlwdENvZGUgPSAnJChcIiN0aGlyZF9wYWdlXCIpLm9uKFwidGFwIGNsaWNrXCIsIFxcJ1tkYXRhLWlkPVwiJyArIGFjdGl2aXR5LmlkICsgJ1wiXSAuaWNvbi1lbnZpYXJcXCcsIGZ1bmN0aW9uKCl7J1xuXHRcdFx0XHQrICgodGhpcy5kYXRhLnN1cHBvcnRzVGFza3MgJiYgYWN0aXZpdHkub25seVZpc2libGVUZWFjaGVycylcblx0XHRcdFx0XHQ/ICdfc2hvd0FsZXJ0KCcgKyB0ZXh0d2ViKCd0YXNrX3Zpc2libGVfb25seV90ZWFjaGVyJykgKyAnKTsnXG5cdFx0XHRcdFx0OiAnb3BlblNlbmRBY3Rpdml0eUhvbWV3b3JrKCcgKyBhY3Rpdml0eS5pZCArICcsICcgKyB0aGlzLmRhdGEuc3VwcG9ydHNUYXNrcyArICcpOycpXG5cdFx0XHRcdCsgJ30pJztcblxuXHRcdFx0c2NyaXB0VGFnLmlubmVyVGV4dCA9IHNjcmlwdENvZGU7XG5cblx0XHRcdGFjdGl2aXR5V3JhcHBlci5hcHBlbmQoaWNvbldyYXBwZXIsIHNjcmlwdFRhZyk7XG5cdFx0fVxuXG5cdFx0Ly8gQWN0aXZpdHkgZGF0YVxuXHRcdHZhciBkYXRhV3JhcHBlciA9IHRoaXMuY3JlYXRlRWxlbWVudCgnRElWJywgeydjbGFzcyc6ICdhY3Rpdml0eS1kYXRhJ30pOyAvLyBXcmFwcGVyXG5cblx0XHR2YXIgYW5jaG9yID0gdGhpcy5jcmVhdGVFbGVtZW50KCdBJywgeydjbGFzcyc6ICdhY3Rpdml0eS10ZXh0LWRhdGEnLCAnaHJlZic6ICdqYXZhc2NyaXB0OnZvaWQoMCknLCAnZGF0YS1vbmNsaWNrJzogYWN0aXZpdHlbXCJvbmNsaWNrVGl0bGVcIl19KTsgLy8gTGluayB0byB0aGUgYWN0aXZpdHlcblxuXHRcdC8vIEFjdGl2aXR5IHRpdGxlXG5cdFx0dmFyIHRpdGxlRWwgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ1AnLCB7J2NsYXNzJzogJ2FjdGl2aXR5LXRpdGxlJ30pLFxuXHRcdFx0dGl0bGVUZXh0ID0gYWN0aXZpdHlbJ3RpdGxlJ10gIT09ICcnID8gYWN0aXZpdHlbJ3RpdGxlJ10gOiB0ZXh0d2ViKCdjb3Vyc2VfYWN0aXZpZGFkX25vX25hbWUnKTtcblxuXHRcdGFuY2hvci5hcHBlbmRDaGlsZCh0aXRsZUVsKS5hcHBlbmQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGl0bGVUZXh0KSk7XG5cblx0XHQvLyBJZiB0aGVyZSdzIGEgZGVzY3JpcHRpb24sIHdlIGluc2VydCBpdC5cblx0XHRpZiAodHlwZW9mIGFjdGl2aXR5WydkZXNjcmlwdGlvbiddICE9PSAndW5kZWZpbmVkJyAmJiBhY3Rpdml0eVsnZGVzY3JpcHRpb24nXSAhPSAnJykge1xuXHRcdFx0dmFyIGRlc2NyaXB0aW9uID0gdGhpcy5jcmVhdGVFbGVtZW50KCdQJywgeydjbGFzcyc6ICdhY3Rpdml0eS1kZXNjcmlwdGlvbid9KTtcblx0XHRcdGRlc2NyaXB0aW9uLmFwcGVuZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShhY3Rpdml0eVsnZGVzY3JpcHRpb24nXSkpO1xuXG5cdFx0XHRhbmNob3IuYXBwZW5kKGRlc2NyaXB0aW9uKTtcblx0XHR9XG5cblx0XHRhY3Rpdml0eVdyYXBwZXIuYXBwZW5kQ2hpbGQoZGF0YVdyYXBwZXIpLmFwcGVuZChhbmNob3IpO1xuXG5cdFx0cmV0dXJuIGFjdGl2aXR5V3JhcHBlcjtcblx0fVxuXG5cdEhvbWVwYWdlLnByb3RvdHlwZS5wcmVsb2FkSW1hZ2UgPSBmdW5jdGlvbih1cmwsIGNhbGxiYWNrLCBvbkVycm9yKSB7XG5cdFx0dmFyIHByZWxvYWRlciA9IHRoaXMuY3JlYXRlRWxlbWVudCgnaW1nJywgeydzcmMnOiB1cmx9KVxuXHRcdFx0ZnVsbENhbGxiYWNrID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGNhbGxiYWNrKHVybCk7XG5cdFx0XHRcdHByZWxvYWRlciA9IG51bGw7XG5cdFx0XHR9O1xuXHRcdHByZWxvYWRlci5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVsbENhbGxiYWNrKTtcblx0XHRwcmVsb2FkZXIuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBvbkVycm9yKTtcblx0fVxufSkoKTtcbiIsIi8qXG4qICAgSmF2YXNjcmlwdCBwcmluY2lwYWwgY29uIGxhIGVzdHJ1Y3R1cmEgYsOhc2ljYSBkZWwgZXN0aWxvXG4qL1xucmVxdWlyZSgnLi9ob21lcGFnZS5qcycpO1xuXG5pbXBvcnQgY2tlU3R5bGVzIGZyb20gJy4vY2tlX3N0eWxlcyc7XG5pbXBvcnQgb3ZlcnJpZGVzIGZyb20gJy4vb3ZlcnJpZGVzJztcblxuKGZ1bmN0aW9uIChibGluaykge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIFRodW5kZXJDbG9uYWJsZVN0eWxlID0gZnVuY3Rpb24gKCkge1xuXHRcdGJsaW5rLnRoZW1lLnN0eWxlc1tcInRodW5kZXJcIl0uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0fVxuXG5cdFRodW5kZXJDbG9uYWJsZVN0eWxlLnByb3RvdHlwZSA9IHtcblx0XHRwYXJlbnQ6IGJsaW5rLnRoZW1lLnN0eWxlc1tcInRodW5kZXJcIl0ucHJvdG90eXBlLFxuXHRcdGJvZHlDbGFzc05hbWU6ICdjb250ZW50X3R5cGVfY2xhc2VfdGh1bmRlci1jbG9uYWJsZScsXG5cdFx0ZXh0cmFQbHVnaW5zOiBbJ2ltYWdlMiddLFxuXHRcdGNrRWRpdG9yU3R5bGVzOiB7XG5cdFx0XHRuYW1lOiAndGh1bmRlci1jbG9uYWJsZScsXG5cdFx0XHRzdHlsZXM6IGNrZVN0eWxlc1xuXHRcdH0sXG5cblx0XHRpbml0OiBmdW5jdGlvbigpIHtcblx0XHRcdC8vIEhlcmVkbyBkZSBvdHJvIGVzdGlsb1xuXHRcdFx0dGhpcy5wYXJlbnQuaW5pdC5jYWxsKHRoaXMucGFyZW50LCB0aGlzKTtcblx0XHRcdHRoaXMucmVtb3ZlRmluYWxTbGlkZSgpO1xuXHRcdH0sXG5cdFx0Li4ub3ZlcnJpZGVzXG5cdH07XG5cblx0VGh1bmRlckNsb25hYmxlU3R5bGUucHJvdG90eXBlID0gXy5leHRlbmQoe30sIG5ldyBibGluay50aGVtZS5zdHlsZXNbXCJ0aHVuZGVyXCJdKCksIFRodW5kZXJDbG9uYWJsZVN0eWxlLnByb3RvdHlwZSk7XG5cblx0YmxpbmsudGhlbWUuc3R5bGVzWyd0aHVuZGVyLWNsb25hYmxlJ10gPSBUaHVuZGVyQ2xvbmFibGVTdHlsZTtcbn0pKCBibGluayApO1xuIiwiLypcclxuKiAgIEphdmFzY3JpcHQgZG9uZGUgZXN0w6FuIGxhcyBmdW5jaW9uZXMgcXVlIHNvYnJlZXNjcmliZW4gYSBmdW5jaW9uZXMgZGUgQmFzaWNcclxuKi9cclxuXHJcbmNvbnN0IG92ZXJyaWRlcyA9ICB7XHJcblx0cmVtb3ZlRmluYWxTbGlkZTogKHQpID0+IHtcclxuXHRcdGxldCB0aGlzU3R5bGUgPSBibGluay5hY3Rpdml0eS5jdXJyZW50U3R5bGU7XHJcblx0XHR0aGlzU3R5bGUucGFyZW50LnJlbW92ZUZpbmFsU2xpZGUuY2FsbCh0aGlzU3R5bGUucGFyZW50LCB0aGlzU3R5bGUsIHRydWUpO1xyXG5cdH1cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgb3ZlcnJpZGVzO1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjIxNTk2OTIxODIyXG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIkQ6L3dvcmtzcGFjZXMvd2ViL2NvbW1vbi11dGlscy9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJobXJcIjp0cnVlLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ==
