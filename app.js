let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let extension = [".com", ".es", ".net"];

for (let pronouns in pronoun) {
    for (let adjs in adj) {
        for (let nouns in noun) {
            for (let extensions in extension) {
                console.log(pronoun[pronouns] + adj[adjs] + noun[nouns] + extension[extensions]);
            }
        }
    }
}