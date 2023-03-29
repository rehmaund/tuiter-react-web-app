import React, {useEffect} from "react";
import {useDispatch, useSelector}
    from "react-redux";
import TuitsItem from "./tuits-item";
import {findTuitsThunk}
    from "../../../services/tuits-thunks";

const TuitsList = () => {
    const {tuits, loading} = useSelector(
        state => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])

    return(
        <ul className="list-group mt-2">
            {loading &&
            <li className="list-group-item">
                Loading...
                </li>
            }
            {
                tuits.map(post =>
                    <li className="list-group-item"><TuitsItem
                        key={post._id}
                        fullpost={post}
                    /></li>
                )
            }
        </ul>
    );
};
export default TuitsList;