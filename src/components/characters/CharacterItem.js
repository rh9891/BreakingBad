import React from "react";

const CharacterItem = ({ character }) => {
    return (
        <div>
            <div className="card">
                <div className="card-inner">
                    <div className="card-front">
                        <img src={character.img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CharacterItem;
