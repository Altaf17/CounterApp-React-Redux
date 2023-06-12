import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Increment, Decrement, Reset, AddFive, ToggleAuth } from '../Redux/actions/actions';

const Counter = () => {
    const dispatch = useDispatch();
    const counts = useSelector((state) => state.CounterReducer.count)
    const auth = useSelector((state) => state.AuthReducer.Auth)
    console.log(counts);
    console.log(auth);
    return (
        <section className="--flex-center --100vh --bg-primary">
            <div className="container --bg-light --p2 --m2 --center-all --width-500px">
                <button
                    className=" --btn --btn-danger"
                    onClick={() => dispatch(ToggleAuth())}
                >
                    {auth ? "Log Out" : "Log In"}
                </button>
                <hr />

                {!auth ? (
                    <p>Please Log in</p>
                ) : (
                    <>
                        <h3>React Counter App</h3>
                        <h1>{counts}</h1>
                        <div className="buttons --flex-center">
                            <button
                                className=" --btn --btn-danger"
                                onClick={() => dispatch(Decrement())}
                            >
                                Subtract
                            </button>
                            <button className=" --btn" onClick={() => dispatch(Reset())}>
                                Reset
                            </button>
                            <button
                                className=" --btn --btn-primary"
                                onClick={() => dispatch(Increment())}
                            >
                                Add
                            </button>
                            <button
                                className=" --btn --btn-primary"
                                onClick={() => dispatch(AddFive(5))}
                            >
                                Add 5
                            </button>
                        </div>
                    </>
                )}
            </div>
        </section>
    )
}

export default Counter