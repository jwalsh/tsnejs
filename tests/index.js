import * as tsnejs from '../src/index';

console.log(tsnejs);

const opt = {
  epsilon: 10,    // epsilon is learning rate (10 = default)
  perplexity: 30, // roughly how many neighbors each point influences (30 = default)
  dim: 2 // dimensionality of the embedding (2 = default)
};

const tsne = new tsnejs.tSNE(opt); // create a tSNE instance

// initialize data. Here we have 3 points and some example pairwise dissimilarities
const dists = [[1.0, 0.1, 0.2], [0.1, 1.0, 0.3], [0.2, 0.1, 1.0]];
tsne.initDataDist(dists);

// every time you call this, solution gets better
// [...Array(500)].forEach((_, i) => tsne.step());

const Y = tsne.getSolution(); // Y is an array of 2-D points that you can plot

console.log(Y);
