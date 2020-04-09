/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, {useEffect, memo} from 'react';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';
import {FormattedMessage} from 'react-intl';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {createStructuredSelector} from 'reselect';

import {useInjectReducer} from 'utils/injectReducer';
import {useInjectSaga} from 'utils/injectSaga';
import {
    makeSelectRepos,
    makeSelectLoading,
    makeSelectError,
} from 'containers/App/selectors';
import H2 from 'components/H2';
// import ReposList from 'components/ReposList';
import AtPrefix from './AtPrefix';
import CenteredSection from './CenteredSection';
import Form from './Form';
import Input from './Input';
import Button from './Button';
import H3 from './H3';
import Ul from './Ul';
import ListItem from './ListItem';
import Section from './Section';
import messages from './messages';
import {loadRepos} from '../App/actions';
import {changeUsername, changeForm, resetForm, selectSet} from './actions';
import {makeSelectUsername, makeSelectItem, makeSelectType} from './selectors';
import reducer from './reducer';
import saga from './saga';
const mapper = {};
const key = 'home';

export function HomePage({
    loading,
    error,
    onSubmitForm,
    onChangeUsername,
    onChangeRadio,
    selectButton,
    onReset,
    answers,
    selected
}) {
    useInjectReducer({key, reducer});
    useInjectSaga({key, saga});

    useEffect(() => {
        // When initial state username is not null, submit the form to load repos
        // if (username && username.trim().length > 0) onSubmitForm();
    }, []);


    const reposListProps = {
        loading,
        error,
    };

    return (
        <article>
            <Helmet>
                <title>Home Page</title>
                <meta
                    name="description"
                    content="A React.js Boilerplate application homepage"
                />
            </Helmet>

            <Form onSubmit={onSubmitForm}>
                <ul>
                    { messages.quiz.messages.map((message, i) => (
                        <ListItem key={message.question.replace(/ /g, '_') + i}>
                            {message.question}
                            {
                                message.answers.map(function (item, index) {
                                    let checked = answers[i] == Object.keys(item)[0];

                                    return (<div key={Object.keys(item)[0] + '_' + i +"question_" + i}>
                                        <input type="radio"
                                               id={Object.values(item)[0].replace(/ /g, '_').replace(/\//g, '_')}
                                               name={"question_" + i}
                                               value={ i + '_' + Object.keys(item)[0] }
                                               onChange={onChangeRadio}
                                               checked={checked}
                                    /> <label
                                        htmlFor={Object.values(item)[0].replace(/ /g, '_').replace(/\//g, '_')}>{Object.keys(item)[0]}: {Object.values(item)[0]}</label>
                                    </div>)
                                })
                            }
                        </ListItem>
                    ))}
                </ul>
            </Form>
            <Section id="results">
                <Button style={{"margin": "1em 25%"}} onClick={onReset}>Restart</Button>
                <Ul>
                    { messages.quiz.answerMap.map(function (answer, i) {
                        let thisselected = selectedanswer(answers, answer);
                        return (
                            <li key={Object.keys(answer)[0]} className={'test'} style={{"display": thisselected}} >
                                <H3>{Object.keys(answer)[0]}</H3>
                                {
                                    answer.copy.map(function (obj, i) {
                                        return (<div key={'copy'+i}>{obj}</div>)
                                    })
                                }
                            </li>
                        )
                    })}
                    {
                        (function(){
                            let thisselectother = selectother(answers);
                            return (<li className="" style={{"display": thisselectother.visible}}>
                                <h3>{thisselectother.msg}</h3>
                                <ul>
                                    {
                                        messages.quiz.answerMap.map(function (answer, i) {
                                            return(
                                                <li key={Object.keys(answer)[0]} style={{"display": thisselectother.visible}} >
                                                    <Button onClick={selectButton}>{Object.keys(answer)[0]}</Button>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </li>)
                        }())
                    }
                </Ul>
            </Section>
        </article>
    );
}

HomePage.propTypes = {
    loading: PropTypes.bool,
    error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
    repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
    onSubmitForm: PropTypes.func,
    username: PropTypes.string,
    onChangeUsername: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
    repos: makeSelectRepos(),
    username: makeSelectUsername(),
    loading: makeSelectLoading(),
    error: makeSelectError(),
    answers: makeSelectItem(),
    selected: makeSelectType()
});

const selectedanswer = function(answers, quiz){
    const key = Object.keys(quiz).filter(obj => { return obj != 'copy'})[0];
    const values = quiz[key];
    let truthy = [];
    for (let i = 0; i < values.length; i++) {
        truthy.push(values[i].indexOf(answers[i]) > -1 || values[i] == "");
    }
    if (new Set(truthy).size == 1 && new Set(truthy).has(true)) {
        mapper[key] = true;
        return "block";
    } else {
        mapper[key] = false;
        return "none";
    }
};
const selectother = function(answers, selected){
    let sort = new Set();
    for (let key in mapper) {
            sort.add(mapper[key])
    }
    let msg = new Set(answers).size > 0 && !new Set(answers).has(undefined) ? 'Sorry, no match, but you can select below.' : "Answer some questions, or select below";
    if (sort.size == 1 && sort.has(false)) {
        return {visible: "block", msg: msg }
    } else {
        return {visible: "none", msg: msg }
    }
};



export function mapDispatchToProps(dispatch) {
    return {
        onChangeRadio: evt => {
            dispatch(changeForm(evt.target.value))
        },
        onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
        onSubmitForm: evt => {
            if (evt !== undefined && evt.preventDefault) evt.preventDefault();
            const form = evt.target;
        },
        onReset: evt => {
            dispatch(resetForm(evt.target.value))
        },
        selectButton: evt => {
            dispatch(selectSet(evt.target.innerText))
        }
    };
}

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
);

export default compose(
    withConnect,
    memo,
)(HomePage);
