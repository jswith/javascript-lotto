<<<<<<< HEAD
class LottoModel {
  constructor() {
    this._lotto = [];
    //this._money = 0;
    //this._count = 0;
    this.detail = false;
  }

  get lootto() {
    return this._lotto;
  }

  get money() {
    return this._money;
  }

  get count() {
    return this._count;
  }

  set lotto(newLotto) {
    this._lotto = newLotto;
  }

  set money(newMoney) {
    this._money = newMoney;
  }

  set count(newCount) {
    this._count = newCount;
  }
}

export default LottoModel;
=======
import { INIT } from "./constant.js"

class LottoModel {
  constructor() {
    this._lottos = INIT.LOTTOS
    this._detail = INIT.DETAIL
  }

  get lottos() {
    return this._lottos
  }

  set lottos(newLottos) {
    this._lottos = newLottos
  }

  addLotto(newLotto) {
    this._lottos.push(newLotto)
  }

  get detail() {
    return this._detail
  }

  toggleDetail() {
    this._detail = !this._detail
  }

  get amount() {
    return this._lottos.length
  }

  init() {
    this._lottos = INIT.LOTTOS
    this._detail = INIT.DETAIL
  }
}
export default LottoModel
>>>>>>> 7f51c15... style: 세미콜론 제거
