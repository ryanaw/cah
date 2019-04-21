interface WhiteCard {
    id: number;
    text: string;
    pack: string;
}

interface BlackCard extends WhiteCard {
    pick: number;
    draw: number;
}

interface PlayedCard extends WhiteCard {
    pid: string;
}

declare namespace ISocket {

    interface Error {
        message: string;
    }

    interface Request {
        pid: string;
    }

    interface UsernameUpdate extends Request {
        username: string;
    }

    interface GameRequest extends Request {
        gid: string;
    }

    interface NewGame extends GameRequest {
        maxScore: number;
        maxPlayers: number;
        timeout: number;
        packs: string[];
        password: string;
    }

    interface JoinGameRequest extends GameRequest {
        password: string;
    }

    namespace GameState {

        interface Player {
            username: string;
            id: string;
            done: boolean;
            host: boolean;
        }

        interface State {
            hid: string;
            gid: string;
            czar: string;
            hand: WhiteCard[];
            black: BlackCard;
            playedCards: PlayedCard[];
            players: Player[];
            winAt: number;
            maxPlayers: number;
            timeout: number;
        }

    }

}
