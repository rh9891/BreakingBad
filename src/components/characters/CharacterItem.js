import React from "react";

const CharacterItem = ({ character }) => {
    return (
        <div>
            <div className="card">
                <div className="card-inner">
                    <div className="card-front">
                        <img src={character.img} alt="" />
                    </div>
                    <div className="card-back">
                        <h1>{character.name}</h1>
                        <ul>
                            <li>
                                <strong>Nickname:</strong> {character.name}
                            </li>
                            <li>
                                <strong>Birthday:</strong> {character.birthday}
                            </li>
                            <li>
                                <strong>Occupation:</strong> {character.occupation}
                            </li>
                            <li>
                                <strong>Status:</strong> {character.status}
                            </li>
                            <li>
                                <strong>Portrayed By:</strong> {character.portrayed}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CharacterItem;
