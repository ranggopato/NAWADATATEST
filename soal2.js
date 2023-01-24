nm = [2, 4, 5, 7, 8];

function psbb(family, member) {
  const minibus = 4;
  if (family != member.length) {
    console.log("Input must be equal with count of family");
  } else {
    let i = 0;
    jumlah = 0;
    while (i < member.length) {
      jumlah += member[i];
      i++;
    }
    console.log(`Minimum bus required is : ${Math.round(jumlah / minibus)}`);
  }
}
psbb(nf, nm);
