const MissionUtils = require("@woowacourse/mission-utils");
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(crossBridge, moveResults) {
    let upper = [];
    let lower = [];
    for (let i = 0; i < crossBridge.length; i++) {
      if (moveResults[i] === "O" && crossBridge[i] === "U") {
        upper.push("O");
        lower.push(" ");
      }
      if (moveResults[i] === "O" && crossBridge[i] === "D") {
        upper.push(" ");
        lower.push("O");
      }
      if (moveResults[i] === "X" && crossBridge[i] === "U") {
        upper.push(" ");
        lower.push("X");
      }
      if (moveResults[i] === "X" && crossBridge[i] === "D") {
        upper.push("X");
        lower.push(" ");
      }
    }
    MissionUtils.Console.print(`[ ${upper.join(" | ")} ]`);
    MissionUtils.Console.print(`[ ${lower.join(" | ")} ]`);
    MissionUtils.Console.print("");
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(tryNumber, bridge, moveCommand) {
    isSuccess =
      bridge.length === moveCommand.length &&
      moveCommand.charAt(moveCommand.length - 1) === "O"
        ? "성공"
        : "실패";
    console.log(moveCommand.charAt(moveCommand.length - 1));
    MissionUtils.Console.print("최종 게임 결과");
    this.printMap(bridge, moveCommand);
    MissionUtils.Console.print(`게임 성공 여부: ${isSuccess}`);
    MissionUtils.Console.print(`총 시도한 횟수: ${tryNumber}`);
    MissionUtils.Console.close();
  },
};

module.exports = OutputView;
