import React, { Component } from "react";
import RuleRow from "./RuleRow";
import "./ScoreTable.css";
import {
  ones,
  twos,
  threes,
  fours,
  fives,
  sixes,
  threeOfKind,
  fourOfKind,
  fullHouse,
  smallStraight,
  largeStraight,
  yahtzee,
  chance
} from "./Rules";

class ScoreTable extends Component {
  render() {
    const { scores, doScore } = this.props;

    return (
      <div className="ScoreTable">
        <section className="ScoreTable-section">
          <h2>Upper</h2>
          <table cellSpacing="0">
            <tbody>
              <RuleRow
                name="Ones"
                score={scores.ones}
                description={ones.description}
                doScore={evt => doScore("ones", ones.evalRoll)}
              />
              <RuleRow
                name="Twos"
                score={scores.twos}
                description={twos.description}
                doScore={evt => doScore("twos", twos.evalRoll)}
              />
              <RuleRow
                name="Threes"
                score={scores.threes}
                description={threes.description}
                doScore={evt => doScore("threes", threes.evalRoll)}
              />
              <RuleRow
                name="Fours"
                score={scores.fours}
                description={fours.description}
                doScore={evt => doScore("fours", fours.evalRoll)}
              />
              <RuleRow
                name="Fives"
                score={scores.fives}
                description={fives.description}
                doScore={evt => doScore("fives", fives.evalRoll)}
              />
              <RuleRow
                name="Sixes"
                score={scores.sixes}
                description={sixes.description}
                doScore={evt => doScore("sixes", sixes.evalRoll)}
              />
            </tbody>
          </table>
        </section>
      </div>
    );
  }
}

export default ScoreTable;
