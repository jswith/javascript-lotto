/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _handler_PurchaseLotto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handler/PurchaseLotto */ "./src/js/handler/PurchaseLotto.js");
/* harmony import */ var _handler_ShowLottoTicketNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handler/ShowLottoTicketNumber */ "./src/js/handler/ShowLottoTicketNumber.js");
/* harmony import */ var _handler_WinningResultModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handler/WinningResultModal */ "./src/js/handler/WinningResultModal.js");



new _handler_PurchaseLotto__WEBPACK_IMPORTED_MODULE_0__["default"]();
new _handler_ShowLottoTicketNumber__WEBPACK_IMPORTED_MODULE_1__["default"]();
new _handler_WinningResultModal__WEBPACK_IMPORTED_MODULE_2__["default"]();

/***/ }),

/***/ "./src/js/constants/constants.js":
/*!***************************************!*\
  !*** ./src/js/constants/constants.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ERROR_MESSAGE": () => (/* binding */ ERROR_MESSAGE),
/* harmony export */   "MONEY_INPUT": () => (/* binding */ MONEY_INPUT),
/* harmony export */   "LOTTO": () => (/* binding */ LOTTO),
/* harmony export */   "LOTTO_REWARD": () => (/* binding */ LOTTO_REWARD)
/* harmony export */ });
var ERROR_MESSAGE = {
  INVALID_MONEY_INPUT: '⚠️ 금액은 1000의 배수이고 1000원 이상 10000원 이하여야 합니다.',
  INVALID_WINNING_NUMBER_INPUT: '⚠️ 1 ~ 45 사이의 숫자를 중복 없이 입력해주세요.'
};
var MONEY_INPUT = {
  MIN_PRICE: 1000,
  MAX_PRICE: 10000
};
var LOTTO = {
  TICKET_PRICE: 1000,
  DIGIT: 6,
  MIN_NUMBER: 1,
  MAX_NUMBER: 45,
  WINNING_NUMBER_LENGTH: 7
};
var LOTTO_REWARD = {
  MATCH_SIX_NUMBERS: 2000000000,
  MATCH_FIVE_NUMBERS_AND_BONUS_BALL: 30000000,
  MATCH_FIVE_NUMBERS: 1500000,
  MATCH_FOUR_NUMBERS: 50000,
  MATCH_THREE_NUMBERS: 5000
};

/***/ }),

/***/ "./src/js/handler/PurchaseLotto.js":
/*!*****************************************!*\
  !*** ./src/js/handler/PurchaseLotto.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PurchaseLotto)
/* harmony export */ });
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dom */ "./src/js/utils/dom.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/constants */ "./src/js/constants/constants.js");
/* harmony import */ var _model_lottoTicket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/lottoTicket */ "./src/js/model/lottoTicket.js");
/* harmony import */ var _validator_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../validator/validator */ "./src/js/validator/validator.js");
/* harmony import */ var _model_money__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/money */ "./src/js/model/money.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var PurchaseLotto = /*#__PURE__*/function () {
  function PurchaseLotto() {
    var _this = this;

    _classCallCheck(this, PurchaseLotto);

    _defineProperty(this, "handlePurchase", function (e) {
      e.preventDefault();
      var moneyInput = Number((0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.$)('.money-input').value);

      if ((0,_validator_validator__WEBPACK_IMPORTED_MODULE_3__.isInvalidMoneyInput)(moneyInput)) {
        alert(_constants_constants__WEBPACK_IMPORTED_MODULE_1__.ERROR_MESSAGE.INVALID_MONEY_INPUT);
        return;
      }

      _model_money__WEBPACK_IMPORTED_MODULE_4__.money.userInput = moneyInput;
      _model_lottoTicket__WEBPACK_IMPORTED_MODULE_2__.lottoTicket.issueLottoTickets(moneyInput);

      _this.showLottoPurcahseResult(_model_lottoTicket__WEBPACK_IMPORTED_MODULE_2__.lottoTicket.getLottoTickets());

      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.focusElement)((0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.$)('#winning-number-1'));
    });

    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.$)('.purchase-form').addEventListener('submit', this.handlePurchase);
  }

  _createClass(PurchaseLotto, [{
    key: "showLottoPurchaseResultElements",
    value: function showLottoPurchaseResultElements() {
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.$$)('.result').forEach(function (element) {
        return element.classList.remove('display-none');
      });
    }
  }, {
    key: "showLottoTicketsLength",
    value: function showLottoTicketsLength(lottoTicketsLength) {
      var template = "<span>\uCD1D ".concat(lottoTicketsLength, "\uAC1C\uB97C \uAD6C\uB9E4\uD558\uC600\uC2B5\uB2C8\uB2E4.</span>\n                      <span>\uBC88\uD638 \uBCF4\uAE30</span>");
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.$)('.purchase-status-container').insertAdjacentHTML('afterbegin', template);
    }
  }, {
    key: "showLottoImage",
    value: function showLottoImage(lottoTickets) {
      var template = lottoTickets.map(function (lottoTicket) {
        return "<div class=\"lotto-img\">\n        \uD83C\uDF9F\uFE0F<span class=\"lotto-number-detail display-none\">".concat(lottoTicket.join(', '), "</span>\n      </div>");
      }).join('');
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.$)('.lotto-grid').insertAdjacentHTML('beforeend', template);
    }
  }, {
    key: "showLottoPurcahseResult",
    value: function showLottoPurcahseResult(lottoTickets) {
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.deactivateForm)(['.money-input', '.purchase-button']);
      this.showLottoPurchaseResultElements();
      this.showLottoTicketsLength(lottoTickets.length);
      this.showLottoImage(lottoTickets);
    }
  }]);

  return PurchaseLotto;
}();



/***/ }),

/***/ "./src/js/handler/ShowLottoTicketNumber.js":
/*!*************************************************!*\
  !*** ./src/js/handler/ShowLottoTicketNumber.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShowLottoTicketNumber)
/* harmony export */ });
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dom */ "./src/js/utils/dom.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var ShowLottoTicketNumber = /*#__PURE__*/function () {
  function ShowLottoTicketNumber() {
    _classCallCheck(this, ShowLottoTicketNumber);

    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.$)('.cm-toggle').addEventListener('click', this.handleDetailView);
  }

  _createClass(ShowLottoTicketNumber, [{
    key: "handleDetailView",
    value: function handleDetailView() {
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.$)('.lotto-grid').classList.toggle('lotto-grid-detail');
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.$$)('.lotto-number-detail').forEach(function (element) {
        element.classList.toggle('display-none');
      });
    }
  }]);

  return ShowLottoTicketNumber;
}();



/***/ }),

/***/ "./src/js/handler/WinningResultModal.js":
/*!**********************************************!*\
  !*** ./src/js/handler/WinningResultModal.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WinningResultModal)
/* harmony export */ });
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dom */ "./src/js/utils/dom.js");
/* harmony import */ var _model_winningNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/winningNumber */ "./src/js/model/winningNumber.js");
/* harmony import */ var _validator_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../validator/validator */ "./src/js/validator/validator.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/constants */ "./src/js/constants/constants.js");
/* harmony import */ var _model_winningStatistics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/winningStatistics */ "./src/js/model/winningStatistics.js");
/* harmony import */ var _model_lottoTicket__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/lottoTicket */ "./src/js/model/lottoTicket.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var WinningResultModal = /*#__PURE__*/function () {
  function WinningResultModal() {
    var _this = this;

    _classCallCheck(this, WinningResultModal);

    _defineProperty(this, "handleWinningResultModal", function (e) {
      e.preventDefault();

      var userInputWinningNumbers = _this.getUserInputWinningNumbers();

      if ((0,_validator_validator__WEBPACK_IMPORTED_MODULE_2__.isInvalidWinningNumbersInput)(userInputWinningNumbers)) {
        alert(_constants_constants__WEBPACK_IMPORTED_MODULE_3__.ERROR_MESSAGE.INVALID_WINNING_NUMBER_INPUT);
        return;
      }

      _model_winningNumber__WEBPACK_IMPORTED_MODULE_1__.winningNumber.setWinningNumbers(userInputWinningNumbers);
      _model_winningStatistics__WEBPACK_IMPORTED_MODULE_4__.winningStatistics.initializeLottoRank();
      _model_winningStatistics__WEBPACK_IMPORTED_MODULE_4__.winningStatistics.calculateLottoRank(_model_winningNumber__WEBPACK_IMPORTED_MODULE_1__.winningNumber.getWinningNumbers(), _model_winningNumber__WEBPACK_IMPORTED_MODULE_1__.winningNumber.getBonusNumber());

      _this.openWinningResultModal();
    });

    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.$)('.winning-numbers-form').addEventListener('submit', this.handleWinningResultModal);
    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.$$)('.winning-numbers').forEach(function (element) {
      return element.addEventListener('input', _this.moveNextInput.bind(element));
    });
    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.$$)('.winning-numbers').forEach(function (element) {
      return element.addEventListener('keydown', _this.movePreviousInput.bind(element));
    });
  }

  _createClass(WinningResultModal, [{
    key: "movePreviousInput",
    value: function movePreviousInput(e) {
      if (e.keyCode === 8) {
        if (e.target === (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.$)('#winning-number-1')) return;
        if (this.value.length !== 0) return;
        this.previousElementSibling === null ? (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.$)('#winning-number-6').focus() : this.previousElementSibling.focus();
      }
    }
  }, {
    key: "moveNextInput",
    value: function moveNextInput() {
      this.value = this.value.slice(0, this.maxLength);
      if (this.value.length !== this.maxLength) return;
      this.nextElementSibling === null ? function () {
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.$)('#bonus-number').focus();
        return;
      }() : this.nextElementSibling.focus();
    }
  }, {
    key: "getUserInputWinningNumbers",
    value: function getUserInputWinningNumbers() {
      return Array.from((0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.$$)('.winning-numbers')).map(function (element) {
        return Number(element.value);
      });
    }
  }, {
    key: "openWinningResultModal",
    value: function openWinningResultModal() {
      var _this2 = this;

      var template = "\n    <div id=\"modal\" class=\"modal-overlay modal-display-none\">\n      <div class=\"modal-window\">\n        <span class=\"modal-close-button\"></span>\n        <h2 class=\"modal-winning-statistics-text\">\uD83C\uDFC6 \uB2F9\uCCA8 \uD1B5\uACC4 \uD83C\uDFC6</h2>\n        <table class=\"modal-table\">\n          <thead>\n            <tr>\n              <th>\uC77C\uCE58 \uAC2F\uC218</th>\n              <th>\uB2F9\uCCA8\uAE08</th>\n              <th>\uB2F9\uCCA8 \uAC2F\uC218</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td>3\uAC1C</td>\n              <td>5,000</td>\n              <td class=\"match-3\">".concat(_model_winningStatistics__WEBPACK_IMPORTED_MODULE_4__.winningStatistics.store.matchThreeNumbers, "\uAC1C</td>\n            </tr>\n            <tr>\n              <td>4\uAC1C</td>\n              <td>50,000</td>\n              <td class=\"match-4\">").concat(_model_winningStatistics__WEBPACK_IMPORTED_MODULE_4__.winningStatistics.store.matchFourNumbers, "\uAC1C</td>\n            </tr>\n            <tr>\n              <td>5\uAC1C</td>\n              <td>1,500,000</td>\n              <td class=\"match-5\">").concat(_model_winningStatistics__WEBPACK_IMPORTED_MODULE_4__.winningStatistics.store.matchFiveNumbers, "\uAC1C</td>\n            </tr>\n            <tr>\n              <td>5\uAC1C + \uBCF4\uB108\uC2A4\uBCFC</td>\n              <td>30,000,000</td>\n              <td class=\"match-5-bonus-ball\">").concat(_model_winningStatistics__WEBPACK_IMPORTED_MODULE_4__.winningStatistics.store.matchFiveNumbersAndBonusBall, "\uAC1C</td>\n            </tr>\n            <tr>\n              <td>6\uAC1C</td>\n              <td>2,000,000,000</td>\n              <td class=\"match-6\">").concat(_model_winningStatistics__WEBPACK_IMPORTED_MODULE_4__.winningStatistics.store.matchSixNumbers, "\uAC1C</td>\n            </tr>\n          </tbody>\n        </table>\n        <div class=\"modal-profit-rate-text\">\uB2F9\uC2E0\uC758 \uCD1D \uC218\uC775\uB960\uC740 ").concat(_model_winningStatistics__WEBPACK_IMPORTED_MODULE_4__.winningStatistics.getProfitRate(), "%\uC785\uB2C8\uB2E4.</div>\n        <button class=\"modal-restart-button\">\uB2E4\uC2DC \uC2DC\uC791\uD558\uAE30</button>\n      </div>\n    </div>");
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.$)('#app').insertAdjacentHTML('afterend', template);
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.$)('#modal').classList.remove('modal-display-none');
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.deactivateForm)(['#show-lotto-result-button']);
      window.addEventListener('click', function (e) {
        e.target === (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.$)('#modal') ? _this2.closeWinningResultModal() : false;
      });
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.$)('.modal-close-button').addEventListener('click', this.closeWinningResultModal);
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.$)('.modal-restart-button').addEventListener('click', this.restartLottoPurchase.bind(this));
    }
  }, {
    key: "closeWinningResultModal",
    value: function closeWinningResultModal() {
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.$)('#modal').classList.add('modal-display-none');
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.$)('#modal').parentElement.removeChild((0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.$)('#modal'));
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.activateForm)(['#show-lotto-result-button']);
    }
  }, {
    key: "initializeElements",
    value: function initializeElements() {
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.activateForm)(['.money-input', '.purchase-button']);
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.$)('#modal').parentElement.removeChild((0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.$)('#modal'));
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.$)('.purchase-status-container').replaceChildren();
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.$)('.lotto-grid').replaceChildren();
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.$)('.cm-toggle').checked = false;
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.$)('.lotto-grid').classList.remove('lotto-grid-detail');
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.$$)('.result').forEach(function (element) {
        return element.classList.add('display-none');
      });
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.resetInput)();
    }
  }, {
    key: "restartLottoPurchase",
    value: function restartLottoPurchase() {
      this.initializeElements();
      _model_lottoTicket__WEBPACK_IMPORTED_MODULE_5__.lottoTicket.initializeLottoTickets();
      _model_winningNumber__WEBPACK_IMPORTED_MODULE_1__.winningNumber.initializeWinningNumbers();
    }
  }]);

  return WinningResultModal;
}();



/***/ }),

/***/ "./src/js/model/lottoTicket.js":
/*!*************************************!*\
  !*** ./src/js/model/lottoTicket.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lottoTicket": () => (/* binding */ lottoTicket)
/* harmony export */ });
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/constants */ "./src/js/constants/constants.js");
/* harmony import */ var _utils_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/array */ "./src/js/utils/array.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



var lottoTicket = {
  store: [],
  issueLottoTickets: function issueLottoTickets(moneyInput) {
    var purchasedLottoTicketsLength = parseInt(moneyInput / _constants_constants__WEBPACK_IMPORTED_MODULE_0__.LOTTO.TICKET_PRICE);

    for (var i = 0; i < purchasedLottoTicketsLength; i += 1) {
      var _lottoTicket = this.generateLottoNumbers();

      this.store.push(_lottoTicket);
    }
  },
  getLottoTickets: function getLottoTickets() {
    return _toConsumableArray(this.store);
  },
  generateLottoNumbers: function generateLottoNumbers() {
    var candidate = Array(45).fill().map(function (element, index) {
      return index + 1;
    });
    return (0,_utils_array__WEBPACK_IMPORTED_MODULE_1__.shuffleNumber)(candidate).slice(0, 6).sort(function (a, b) {
      return a - b;
    });
  },
  initializeLottoTickets: function initializeLottoTickets() {
    this.store = [];
  }
};

/***/ }),

/***/ "./src/js/model/money.js":
/*!*******************************!*\
  !*** ./src/js/model/money.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "money": () => (/* binding */ money)
/* harmony export */ });
var money = {
  userInput: 0
};

/***/ }),

/***/ "./src/js/model/winningNumber.js":
/*!***************************************!*\
  !*** ./src/js/model/winningNumber.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "winningNumber": () => (/* binding */ winningNumber)
/* harmony export */ });
var winningNumber = {
  numbers: [],
  bonusNumber: 0,
  getWinningNumbers: function getWinningNumbers() {
    return this.numbers[0];
  },
  getBonusNumber: function getBonusNumber() {
    return this.bonusNumber;
  },
  setWinningNumbers: function setWinningNumbers(number) {
    this.initializeWinningNumbers();
    this.numbers.push(number.slice(0, 6));
    this.bonusNumber = number.slice(6)[0];
  },
  initializeWinningNumbers: function initializeWinningNumbers() {
    this.numbers = [];
    this.bonusNumber = 0;
  }
};

/***/ }),

/***/ "./src/js/model/winningStatistics.js":
/*!*******************************************!*\
  !*** ./src/js/model/winningStatistics.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "winningStatistics": () => (/* binding */ winningStatistics)
/* harmony export */ });
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/constants */ "./src/js/constants/constants.js");
/* harmony import */ var _utils_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/array */ "./src/js/utils/array.js");
/* harmony import */ var _lottoTicket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lottoTicket */ "./src/js/model/lottoTicket.js");
/* harmony import */ var _money__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./money */ "./src/js/model/money.js");




var winningStatistics = {
  store: {
    matchThreeNumbers: 0,
    matchFourNumbers: 0,
    matchFiveNumbers: 0,
    matchFiveNumbersAndBonusBall: 0,
    matchSixNumbers: 0
  },
  calculateLottoRank: function calculateLottoRank(winningNumbers, bonusNumber) {
    var _this = this;

    var lottoTickets = _lottoTicket__WEBPACK_IMPORTED_MODULE_2__.lottoTicket.getLottoTickets();
    lottoTickets.forEach(function (lottoTicket) {
      var countMatchWinningNumbers = (0,_utils_array__WEBPACK_IMPORTED_MODULE_1__.findEqualElementsLength)(lottoTicket, winningNumbers);
      var countMatchBonusNumber = lottoTicket.includes(bonusNumber) ? 1 : 0;

      switch (countMatchWinningNumbers) {
        case 6:
          _this.store.matchSixNumbers += 1;
          break;

        case 5:
          if (countMatchBonusNumber) {
            _this.store.matchFiveNumbersAndBonusBall += 1;
            break;
          }

          _this.store.matchFiveNumbers += 1;
          break;

        case 4:
          _this.store.matchFourNumbers += 1;
          break;

        case 3:
          _this.store.matchThreeNumbers += 1;
          break;
      }
    });
  },
  getProfitRate: function getProfitRate() {
    var profit = this.store.matchThreeNumbers * _constants_constants__WEBPACK_IMPORTED_MODULE_0__.LOTTO_REWARD.MATCH_THREE_NUMBERS + this.store.matchFourNumbers * _constants_constants__WEBPACK_IMPORTED_MODULE_0__.LOTTO_REWARD.MATCH_FOUR_NUMBERS + this.store.matchFiveNumbers * _constants_constants__WEBPACK_IMPORTED_MODULE_0__.LOTTO_REWARD.MATCH_FIVE_NUMBERS + this.store.matchFiveNumbersAndBonusBall * _constants_constants__WEBPACK_IMPORTED_MODULE_0__.LOTTO_REWARD.MATCH_FIVE_NUMBERS_AND_BONUS_BALL + this.store.matchSixNumbers * _constants_constants__WEBPACK_IMPORTED_MODULE_0__.LOTTO_REWARD.MATCH_SIX_NUMBERS;
    return (profit - _money__WEBPACK_IMPORTED_MODULE_3__.money.userInput) / _money__WEBPACK_IMPORTED_MODULE_3__.money.userInput * 100;
  },
  initializeLottoRank: function initializeLottoRank() {
    this.store.matchThreeNumbers = 0;
    this.store.matchFourNumbers = 0;
    this.store.matchFiveNumbers = 0;
    this.store.matchFiveNumbersAndBonusBall = 0;
    this.store.matchSixNumbers = 0;
  }
};

/***/ }),

/***/ "./src/js/utils/array.js":
/*!*******************************!*\
  !*** ./src/js/utils/array.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shuffleNumber": () => (/* binding */ shuffleNumber),
/* harmony export */   "findEqualElementsLength": () => (/* binding */ findEqualElementsLength)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var shuffleNumber = function shuffleNumber(array) {
  return _toConsumableArray(array).sort(function () {
    return Math.random() - 0.5;
  });
};
var findEqualElementsLength = function findEqualElementsLength(array1, array2) {
  var mergedArray = array1.concat(array2);
  var equalElements = mergedArray.filter(function (item) {
    return array1.includes(item) && array2.includes(item);
  });

  var deduplicatedEqualElements = _toConsumableArray(new Set(equalElements));

  return deduplicatedEqualElements.length;
};

/***/ }),

/***/ "./src/js/utils/dom.js":
/*!*****************************!*\
  !*** ./src/js/utils/dom.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ $),
/* harmony export */   "$$": () => (/* binding */ $$),
/* harmony export */   "deactivateForm": () => (/* binding */ deactivateForm),
/* harmony export */   "activateForm": () => (/* binding */ activateForm),
/* harmony export */   "resetInput": () => (/* binding */ resetInput),
/* harmony export */   "focusElement": () => (/* binding */ focusElement)
/* harmony export */ });
var $ = function $(selector) {
  var baseElement = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return baseElement.querySelector(selector);
};
var $$ = function $$(selector) {
  var baseElement = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return baseElement.querySelectorAll(selector);
};
var deactivateForm = function deactivateForm(selectorArray) {
  selectorArray.forEach(function (selector) {
    var element = $(selector);
    element.setAttribute('disabled', true);
    element.tagName === 'BUTTON' && element.classList.add('button-dimmed');
  });
};
var activateForm = function activateForm(selectorArray) {
  selectorArray.forEach(function (selector) {
    var element = $(selector);
    element.removeAttribute('disabled');
    element.tagName === 'BUTTON' && element.classList.remove('button-dimmed');
  });
};
var resetInput = function resetInput() {
  $$('input').forEach(function (element) {
    element.value = '';
  });
};
var focusElement = function focusElement(selector) {
  selector.focus();
};

/***/ }),

/***/ "./src/js/validator/validator.js":
/*!***************************************!*\
  !*** ./src/js/validator/validator.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isInvalidMoneyInput": () => (/* binding */ isInvalidMoneyInput),
/* harmony export */   "isInvalidWinningNumbersInput": () => (/* binding */ isInvalidWinningNumbersInput)
/* harmony export */ });
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/constants */ "./src/js/constants/constants.js");
/* harmony import */ var _model_winningNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/winningNumber */ "./src/js/model/winningNumber.js");


var isInvalidMoneyInput = function isInvalidMoneyInput(money) {
  return money % _constants_constants__WEBPACK_IMPORTED_MODULE_0__.MONEY_INPUT.MIN_PRICE !== 0 || money < _constants_constants__WEBPACK_IMPORTED_MODULE_0__.MONEY_INPUT.MIN_PRICE || money > _constants_constants__WEBPACK_IMPORTED_MODULE_0__.MONEY_INPUT.MAX_PRICE;
};

var isDuplicateWinningNumbers = function isDuplicateWinningNumbers(winningNumbers) {
  return new Set(winningNumbers).size !== _constants_constants__WEBPACK_IMPORTED_MODULE_0__.LOTTO.WINNING_NUMBER_LENGTH;
};

var isOverRangeWinningNumbers = function isOverRangeWinningNumbers(winningNumbers) {
  return winningNumbers.some(function (number) {
    return number < _constants_constants__WEBPACK_IMPORTED_MODULE_0__.LOTTO.MIN_NUMBER || number > _constants_constants__WEBPACK_IMPORTED_MODULE_0__.LOTTO.MAX_NUMBER;
  });
};

var isInvalidWinningNumbersInput = function isInvalidWinningNumbersInput(winningNumbers) {
  return isDuplicateWinningNumbers(winningNumbers) || isOverRangeWinningNumbers(winningNumbers);
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/index.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  background: #f9f9f9;\r\n}\r\n\r\n#app {\r\n  position: absolute;\r\n  left: 50%;\r\n  transform: translate(-50%, 0);\r\n  padding: 20px;\r\n  background: #ffffff;\r\n  font-family: Roboto;\r\n}\r\n\r\nheader {\r\n  padding: 20px;\r\n}\r\n\r\nheader h1 {\r\n  font-style: normal;\r\n  font-weight: 600;\r\n  font-size: 34px;\r\n  line-height: 36px;\r\n  text-align: center;\r\n}\r\n\r\nbutton:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n.button-dimmed {\r\n  opacity: 0.4;\r\n}\r\n\r\n.money-input-text {\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  font-size: 15px;\r\n  line-height: 24px;\r\n  letter-spacing: 0.5px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.money-input {\r\n  width: 310px;\r\n  height: 36px;\r\n  border: 1px solid #b4b4b4;\r\n  box-sizing: border-box;\r\n  border-radius: 4px;\r\n  flex: none;\r\n  order: 1;\r\n  align-self: stretch;\r\n  flex-grow: 0;\r\n  margin: 4px 0px;\r\n}\r\n\r\n.purchase-button {\r\n  width: 56px;\r\n  height: 36px;\r\n  background: #00bcd4;\r\n  border-radius: 4px;\r\n  color: #ffffff;\r\n  border: none;\r\n  margin-left: 10px;\r\n}\r\n\r\n.purchase-status-container {\r\n  margin-top: 28px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.lotto-grid {\r\n  display: grid;\r\n  margin: 10px 0px 30px 0px;\r\n  grid-template-columns: repeat(5, 1fr);\r\n}\r\n\r\n.lotto-grid-detail {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.lotto-number-detail {\r\n  font-weight: normal;\r\n  font-size: 15px;\r\n  line-height: 24px;\r\n  letter-spacing: 0.5px;\r\n  margin-left: 8px;\r\n}\r\n\r\n.lotto-grid div {\r\n  padding-right: 3px;\r\n}\r\n\r\n.lotto-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin-top: 12px;\r\n}\r\n\r\n.lotto-img {\r\n  font-size: 34px;\r\n  display: flex;\r\n  align-items: center;\r\n  margin-right: 8px;\r\n}\r\n\r\n/* Toggle Button */\r\n.cm-toggle {\r\n  height: 20px;\r\n  -webkit-appearance: none;\r\n  -webkit-tap-highlight-color: transparent;\r\n  position: relative;\r\n  border: 0;\r\n  outline: 0;\r\n  cursor: pointer;\r\n  margin: 10px;\r\n  opacity: 0.4;\r\n  padding-top: 6px;\r\n}\r\n\r\n/* To create surface of toggle button */\r\n.cm-toggle:after {\r\n  content: '';\r\n  width: 44px;\r\n  height: 18px;\r\n  display: inline-block;\r\n  background: rgba(33, 33, 33, 0.08);\r\n  border-radius: 18px;\r\n  clear: both;\r\n}\r\n\r\n/* Contents before checkbox to create toggle handle */\r\n.cm-toggle:before {\r\n  content: '';\r\n  width: 23px;\r\n  height: 23px;\r\n  display: block;\r\n  position: absolute;\r\n  left: -1px;\r\n  top: 3px;\r\n  border-radius: 50%;\r\n  background: #ededed;\r\n  box-shadow: 1px 1px 3px rgb(0 0 0 / 60%);\r\n}\r\n\r\n/* Shift the handle to left on check event */\r\n.cm-toggle:checked:before {\r\n  left: 20px;\r\n  box-shadow: -1px 1px 3px rgb(0 0 0 / 60%);\r\n  background: #00bcd4;\r\n}\r\n/* Background color when toggle button will be active */\r\n.cm-toggle:checked:after {\r\n  background: #80deea;\r\n}\r\n\r\nh2 {\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 15px;\r\n  line-height: 24px;\r\n  letter-spacing: 0.5px;\r\n}\r\n\r\n.winning-text-contatiner {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin-top: 8px;\r\n}\r\n\r\n.winning-numbers {\r\n  width: 34px;\r\n  height: 36px;\r\n  border-radius: 4px;\r\n  border: 1px solid #b4b4b4;\r\n  box-sizing: border-box;\r\n  margin-right: 8px;\r\n  text-align: center;\r\n}\r\n\r\n.winning-numbers-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin-top: 8px;\r\n}\r\n\r\n#show-lotto-result-button {\r\n  width: 382px;\r\n  height: 36px;\r\n  padding: 6px 6px 6px 8px;\r\n  margin-top: 34px;\r\n  border: none;\r\n  border-radius: 4px;\r\n  font-size: 14px;\r\n  line-height: 16px;\r\n  letter-spacing: 1.25px;\r\n  text-transform: uppercase;\r\n  background: #00bcd4;\r\n  color: #ffffff;\r\n}\r\n\r\n#bonus-number {\r\n  margin-right: 0;\r\n}\r\n\r\n.display-none {\r\n  display: none;\r\n}\r\n\r\ninput::-webkit-outer-spin-button,\r\ninput::-webkit-inner-spin-button {\r\n  -webkit-appearance: none;\r\n  margin: 0;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/index.css"],"names":[],"mappings":"AAAA;EACE,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,6BAA6B;EAC7B,aAAa;EACb,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;EACnB,eAAe;EACf,iBAAiB;EACjB,qBAAqB;EACrB,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,yBAAyB;EACzB,sBAAsB;EACtB,kBAAkB;EAClB,UAAU;EACV,QAAQ;EACR,mBAAmB;EACnB,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,kBAAkB;EAClB,cAAc;EACd,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,qCAAqC;AACvC;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,mBAAmB;EACnB,eAAe;EACf,iBAAiB;EACjB,qBAAqB;EACrB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,aAAa;EACb,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA,kBAAkB;AAClB;EACE,YAAY;EACZ,wBAAwB;EACxB,wCAAwC;EACxC,kBAAkB;EAClB,SAAS;EACT,UAAU;EACV,eAAe;EACf,YAAY;EACZ,YAAY;EACZ,gBAAgB;AAClB;;AAEA,uCAAuC;AACvC;EACE,WAAW;EACX,WAAW;EACX,YAAY;EACZ,qBAAqB;EACrB,kCAAkC;EAClC,mBAAmB;EACnB,WAAW;AACb;;AAEA,qDAAqD;AACrD;EACE,WAAW;EACX,WAAW;EACX,YAAY;EACZ,cAAc;EACd,kBAAkB;EAClB,UAAU;EACV,QAAQ;EACR,kBAAkB;EAClB,mBAAmB;EACnB,wCAAwC;AAC1C;;AAEA,4CAA4C;AAC5C;EACE,UAAU;EACV,yCAAyC;EACzC,mBAAmB;AACrB;AACA,uDAAuD;AACvD;EACE,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,yBAAyB;EACzB,sBAAsB;EACtB,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,wBAAwB;EACxB,gBAAgB;EAChB,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,iBAAiB;EACjB,sBAAsB;EACtB,yBAAyB;EACzB,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;;EAEE,wBAAwB;EACxB,SAAS;AACX","sourcesContent":["body {\r\n  background: #f9f9f9;\r\n}\r\n\r\n#app {\r\n  position: absolute;\r\n  left: 50%;\r\n  transform: translate(-50%, 0);\r\n  padding: 20px;\r\n  background: #ffffff;\r\n  font-family: Roboto;\r\n}\r\n\r\nheader {\r\n  padding: 20px;\r\n}\r\n\r\nheader h1 {\r\n  font-style: normal;\r\n  font-weight: 600;\r\n  font-size: 34px;\r\n  line-height: 36px;\r\n  text-align: center;\r\n}\r\n\r\nbutton:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n.button-dimmed {\r\n  opacity: 0.4;\r\n}\r\n\r\n.money-input-text {\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  font-size: 15px;\r\n  line-height: 24px;\r\n  letter-spacing: 0.5px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.money-input {\r\n  width: 310px;\r\n  height: 36px;\r\n  border: 1px solid #b4b4b4;\r\n  box-sizing: border-box;\r\n  border-radius: 4px;\r\n  flex: none;\r\n  order: 1;\r\n  align-self: stretch;\r\n  flex-grow: 0;\r\n  margin: 4px 0px;\r\n}\r\n\r\n.purchase-button {\r\n  width: 56px;\r\n  height: 36px;\r\n  background: #00bcd4;\r\n  border-radius: 4px;\r\n  color: #ffffff;\r\n  border: none;\r\n  margin-left: 10px;\r\n}\r\n\r\n.purchase-status-container {\r\n  margin-top: 28px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.lotto-grid {\r\n  display: grid;\r\n  margin: 10px 0px 30px 0px;\r\n  grid-template-columns: repeat(5, 1fr);\r\n}\r\n\r\n.lotto-grid-detail {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.lotto-number-detail {\r\n  font-weight: normal;\r\n  font-size: 15px;\r\n  line-height: 24px;\r\n  letter-spacing: 0.5px;\r\n  margin-left: 8px;\r\n}\r\n\r\n.lotto-grid div {\r\n  padding-right: 3px;\r\n}\r\n\r\n.lotto-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin-top: 12px;\r\n}\r\n\r\n.lotto-img {\r\n  font-size: 34px;\r\n  display: flex;\r\n  align-items: center;\r\n  margin-right: 8px;\r\n}\r\n\r\n/* Toggle Button */\r\n.cm-toggle {\r\n  height: 20px;\r\n  -webkit-appearance: none;\r\n  -webkit-tap-highlight-color: transparent;\r\n  position: relative;\r\n  border: 0;\r\n  outline: 0;\r\n  cursor: pointer;\r\n  margin: 10px;\r\n  opacity: 0.4;\r\n  padding-top: 6px;\r\n}\r\n\r\n/* To create surface of toggle button */\r\n.cm-toggle:after {\r\n  content: '';\r\n  width: 44px;\r\n  height: 18px;\r\n  display: inline-block;\r\n  background: rgba(33, 33, 33, 0.08);\r\n  border-radius: 18px;\r\n  clear: both;\r\n}\r\n\r\n/* Contents before checkbox to create toggle handle */\r\n.cm-toggle:before {\r\n  content: '';\r\n  width: 23px;\r\n  height: 23px;\r\n  display: block;\r\n  position: absolute;\r\n  left: -1px;\r\n  top: 3px;\r\n  border-radius: 50%;\r\n  background: #ededed;\r\n  box-shadow: 1px 1px 3px rgb(0 0 0 / 60%);\r\n}\r\n\r\n/* Shift the handle to left on check event */\r\n.cm-toggle:checked:before {\r\n  left: 20px;\r\n  box-shadow: -1px 1px 3px rgb(0 0 0 / 60%);\r\n  background: #00bcd4;\r\n}\r\n/* Background color when toggle button will be active */\r\n.cm-toggle:checked:after {\r\n  background: #80deea;\r\n}\r\n\r\nh2 {\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 15px;\r\n  line-height: 24px;\r\n  letter-spacing: 0.5px;\r\n}\r\n\r\n.winning-text-contatiner {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin-top: 8px;\r\n}\r\n\r\n.winning-numbers {\r\n  width: 34px;\r\n  height: 36px;\r\n  border-radius: 4px;\r\n  border: 1px solid #b4b4b4;\r\n  box-sizing: border-box;\r\n  margin-right: 8px;\r\n  text-align: center;\r\n}\r\n\r\n.winning-numbers-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin-top: 8px;\r\n}\r\n\r\n#show-lotto-result-button {\r\n  width: 382px;\r\n  height: 36px;\r\n  padding: 6px 6px 6px 8px;\r\n  margin-top: 34px;\r\n  border: none;\r\n  border-radius: 4px;\r\n  font-size: 14px;\r\n  line-height: 16px;\r\n  letter-spacing: 1.25px;\r\n  text-transform: uppercase;\r\n  background: #00bcd4;\r\n  color: #ffffff;\r\n}\r\n\r\n#bonus-number {\r\n  margin-right: 0;\r\n}\r\n\r\n.display-none {\r\n  display: none;\r\n}\r\n\r\ninput::-webkit-outer-spin-button,\r\ninput::-webkit-inner-spin-button {\r\n  -webkit-appearance: none;\r\n  margin: 0;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/modal.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/modal.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#modal.modal-overlay {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background: rgba(133, 126, 126, 0.75);\r\n  box-shadow: 0 8px 32px 0 rgba(183, 184, 194, 0.37);\r\n  backdrop-filter: blur(1.5px);\r\n  -webkit-backdrop-filter: blur(1.5px);\r\n  border-radius: 10px;\r\n  border: 1px solid rgba(255, 255, 255, 0.18);\r\n}\r\n#modal .modal-window {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background: rgb(255, 255, 255);\r\n  box-shadow: 0 8px 32px 0 rgba(130, 130, 141, 0.37);\r\n  backdrop-filter: blur(13.5px);\r\n  -webkit-backdrop-filter: blur(13.5px);\r\n  border-radius: 10px;\r\n  border: 1px solid rgba(255, 255, 255, 0.18);\r\n  width: 330px;\r\n  height: 450px;\r\n  position: relative;\r\n  top: -100px;\r\n  padding: 10px;\r\n}\r\n\r\n#modal h2 {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-size: 24px;\r\n  margin-bottom: 30px;\r\n  font-weight: 900;\r\n}\r\n#modal .modal-close-button:after {\r\n  display: inline-block;\r\n  content: '\\00d7'; /* This will render the 'X' */\r\n  cursor: pointer;\r\n  float: right;\r\n  font-size: 30px;\r\n}\r\n\r\n#modal .content {\r\n  margin-top: 20px;\r\n  padding: 0px 10px;\r\n  text-shadow: 1px 1px 2px gray;\r\n  color: white;\r\n}\r\n\r\n#modal .modal-table {\r\n  text-align: center;\r\n  border: 1px solid #444444;\r\n  border-collapse: collapse;\r\n  border-left: none;\r\n  border-right: none;\r\n}\r\n\r\n#modal .modal-table tr {\r\n  border: 1px solid #444444;\r\n  border-collapse: collapse;\r\n  border-left: none;\r\n  border-right: none;\r\n  border-color: #dcdcdc;\r\n}\r\n\r\n#modal .modal-table th {\r\n  padding: 10px 6px;\r\n  font-weight: 900;\r\n}\r\n\r\n#modal .modal-table td {\r\n  padding: 10px 6px;\r\n}\r\n\r\n#modal .modal-profit-rate-text {\r\n  text-align: center;\r\n  font-weight: 900;\r\n  padding: 20px 0px 15px 0px;\r\n  font-size: 15px;\r\n}\r\n\r\n#modal .modal-restart-button {\r\n  display: block;\r\n  margin: auto;\r\n  width: 140px;\r\n  height: 34px;\r\n  color: #ffffff;\r\n  background-color: #00bcd4;\r\n  border-radius: 4px;\r\n  border: 0;\r\n  outline: 0;\r\n  cursor: pointer;\r\n}\r\n\r\n.modal-display-none {\r\n  display: none !important;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/modal.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,OAAO;EACP,MAAM;EACN,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,qCAAqC;EACrC,kDAAkD;EAClD,4BAA4B;EAC5B,oCAAoC;EACpC,mBAAmB;EACnB,2CAA2C;AAC7C;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,kDAAkD;EAClD,6BAA6B;EAC7B,qCAAqC;EACrC,mBAAmB;EACnB,2CAA2C;EAC3C,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,WAAW;EACX,aAAa;AACf;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,mBAAmB;EACnB,gBAAgB;AAClB;AACA;EACE,qBAAqB;EACrB,gBAAgB,EAAE,6BAA6B;EAC/C,eAAe;EACf,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,6BAA6B;EAC7B,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,yBAAyB;EACzB,yBAAyB;EACzB,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;EACzB,yBAAyB;EACzB,iBAAiB;EACjB,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,0BAA0B;EAC1B,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,YAAY;EACZ,YAAY;EACZ,YAAY;EACZ,cAAc;EACd,yBAAyB;EACzB,kBAAkB;EAClB,SAAS;EACT,UAAU;EACV,eAAe;AACjB;;AAEA;EACE,wBAAwB;AAC1B","sourcesContent":["#modal.modal-overlay {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background: rgba(133, 126, 126, 0.75);\r\n  box-shadow: 0 8px 32px 0 rgba(183, 184, 194, 0.37);\r\n  backdrop-filter: blur(1.5px);\r\n  -webkit-backdrop-filter: blur(1.5px);\r\n  border-radius: 10px;\r\n  border: 1px solid rgba(255, 255, 255, 0.18);\r\n}\r\n#modal .modal-window {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background: rgb(255, 255, 255);\r\n  box-shadow: 0 8px 32px 0 rgba(130, 130, 141, 0.37);\r\n  backdrop-filter: blur(13.5px);\r\n  -webkit-backdrop-filter: blur(13.5px);\r\n  border-radius: 10px;\r\n  border: 1px solid rgba(255, 255, 255, 0.18);\r\n  width: 330px;\r\n  height: 450px;\r\n  position: relative;\r\n  top: -100px;\r\n  padding: 10px;\r\n}\r\n\r\n#modal h2 {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-size: 24px;\r\n  margin-bottom: 30px;\r\n  font-weight: 900;\r\n}\r\n#modal .modal-close-button:after {\r\n  display: inline-block;\r\n  content: '\\00d7'; /* This will render the 'X' */\r\n  cursor: pointer;\r\n  float: right;\r\n  font-size: 30px;\r\n}\r\n\r\n#modal .content {\r\n  margin-top: 20px;\r\n  padding: 0px 10px;\r\n  text-shadow: 1px 1px 2px gray;\r\n  color: white;\r\n}\r\n\r\n#modal .modal-table {\r\n  text-align: center;\r\n  border: 1px solid #444444;\r\n  border-collapse: collapse;\r\n  border-left: none;\r\n  border-right: none;\r\n}\r\n\r\n#modal .modal-table tr {\r\n  border: 1px solid #444444;\r\n  border-collapse: collapse;\r\n  border-left: none;\r\n  border-right: none;\r\n  border-color: #dcdcdc;\r\n}\r\n\r\n#modal .modal-table th {\r\n  padding: 10px 6px;\r\n  font-weight: 900;\r\n}\r\n\r\n#modal .modal-table td {\r\n  padding: 10px 6px;\r\n}\r\n\r\n#modal .modal-profit-rate-text {\r\n  text-align: center;\r\n  font-weight: 900;\r\n  padding: 20px 0px 15px 0px;\r\n  font-size: 15px;\r\n}\r\n\r\n#modal .modal-restart-button {\r\n  display: block;\r\n  margin: auto;\r\n  width: 140px;\r\n  height: 34px;\r\n  color: #ffffff;\r\n  background-color: #00bcd4;\r\n  border-radius: 4px;\r\n  border: 0;\r\n  outline: 0;\r\n  cursor: pointer;\r\n}\r\n\r\n.modal-display-none {\r\n  display: none !important;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/reset.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/reset.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/ \r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\r\n\r\nhtml,\r\nbody,\r\ndiv,\r\nspan,\r\napplet,\r\nobject,\r\niframe,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\np,\r\nblockquote,\r\npre,\r\na,\r\nabbr,\r\nacronym,\r\naddress,\r\nbig,\r\ncite,\r\ncode,\r\ndel,\r\ndfn,\r\nem,\r\nimg,\r\nins,\r\nkbd,\r\nq,\r\ns,\r\nsamp,\r\nsmall,\r\nstrike,\r\nstrong,\r\nsub,\r\nsup,\r\ntt,\r\nvar,\r\nb,\r\nu,\r\ni,\r\ncenter,\r\ndl,\r\ndt,\r\ndd,\r\nol,\r\nul,\r\nli,\r\nfieldset,\r\nform,\r\nlabel,\r\nlegend,\r\ntable,\r\ncaption,\r\ntbody,\r\ntfoot,\r\nthead,\r\ntr,\r\nth,\r\ntd,\r\narticle,\r\naside,\r\ncanvas,\r\ndetails,\r\nembed,\r\nfigure,\r\nfigcaption,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmenu,\r\nnav,\r\noutput,\r\nruby,\r\nsection,\r\nsummary,\r\ntime,\r\nmark,\r\naudio,\r\nvideo {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  font-size: 100%;\r\n  font: inherit;\r\n  vertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle,\r\naside,\r\ndetails,\r\nfigcaption,\r\nfigure,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmenu,\r\nnav,\r\nsection {\r\n  display: block;\r\n}\r\nbody {\r\n  line-height: 1;\r\n}\r\nol,\r\nul {\r\n  list-style: none;\r\n}\r\nblockquote,\r\nq {\r\n  quotes: none;\r\n}\r\nblockquote:before,\r\nblockquote:after,\r\nq:before,\r\nq:after {\r\n  content: '';\r\n  content: none;\r\n}\r\ntable {\r\n  border-collapse: collapse;\r\n  border-spacing: 0;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/reset.css"],"names":[],"mappings":"AAAA;;;CAGC;;AAED;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAiFE,SAAS;EACT,UAAU;EACV,SAAS;EACT,eAAe;EACf,aAAa;EACb,wBAAwB;AAC1B;AACA,gDAAgD;AAChD;;;;;;;;;;;EAWE,cAAc;AAChB;AACA;EACE,cAAc;AAChB;AACA;;EAEE,gBAAgB;AAClB;AACA;;EAEE,YAAY;AACd;AACA;;;;EAIE,WAAW;EACX,aAAa;AACf;AACA;EACE,yBAAyB;EACzB,iBAAiB;AACnB","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\r\n\r\nhtml,\r\nbody,\r\ndiv,\r\nspan,\r\napplet,\r\nobject,\r\niframe,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\np,\r\nblockquote,\r\npre,\r\na,\r\nabbr,\r\nacronym,\r\naddress,\r\nbig,\r\ncite,\r\ncode,\r\ndel,\r\ndfn,\r\nem,\r\nimg,\r\nins,\r\nkbd,\r\nq,\r\ns,\r\nsamp,\r\nsmall,\r\nstrike,\r\nstrong,\r\nsub,\r\nsup,\r\ntt,\r\nvar,\r\nb,\r\nu,\r\ni,\r\ncenter,\r\ndl,\r\ndt,\r\ndd,\r\nol,\r\nul,\r\nli,\r\nfieldset,\r\nform,\r\nlabel,\r\nlegend,\r\ntable,\r\ncaption,\r\ntbody,\r\ntfoot,\r\nthead,\r\ntr,\r\nth,\r\ntd,\r\narticle,\r\naside,\r\ncanvas,\r\ndetails,\r\nembed,\r\nfigure,\r\nfigcaption,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmenu,\r\nnav,\r\noutput,\r\nruby,\r\nsection,\r\nsummary,\r\ntime,\r\nmark,\r\naudio,\r\nvideo {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  font-size: 100%;\r\n  font: inherit;\r\n  vertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle,\r\naside,\r\ndetails,\r\nfigcaption,\r\nfigure,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmenu,\r\nnav,\r\nsection {\r\n  display: block;\r\n}\r\nbody {\r\n  line-height: 1;\r\n}\r\nol,\r\nul {\r\n  list-style: none;\r\n}\r\nblockquote,\r\nq {\r\n  quotes: none;\r\n}\r\nblockquote:before,\r\nblockquote:after,\r\nq:before,\r\nq:after {\r\n  content: '';\r\n  content: none;\r\n}\r\ntable {\r\n  border-collapse: collapse;\r\n  border-spacing: 0;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/modal.css":
/*!***************************!*\
  !*** ./src/css/modal.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./modal.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/modal.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/reset.css":
/*!***************************!*\
  !*** ./src/css/reset.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/reset.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_reset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/reset */ "./src/css/reset.css");
/* harmony import */ var _css_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/index */ "./src/css/index.css");
/* harmony import */ var _css_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/modal */ "./src/css/modal.css");
/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/app */ "./src/js/app.js");




})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map