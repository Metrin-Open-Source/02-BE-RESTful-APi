// daftar buku
const buku = [
    {
      id: 1,
      judul: 'Harry Potter',
      penulis: 'J.K. Rowling',
      tahunTerbit: 1997
    },
    {
      id: 2,
      judul: 'The Lord of the Rings',
      penulis: 'J.R.R. Tolkien',
      tahunTerbit: 1954
    },
  ]




const getAllBuku = (req, res) => {
    res.json(buku)
}

const getBukuById = (req, res) => {
  const id = req.params.id;
  const bukuById = buku.find((buku) => buku.id === parseInt(id));
  if (bukuById) {
    res.json(bukuById);
  } else {
    res.status(404).json({ message: 'Buku not found' });
  } 
  // ambil id dari params

    
}

const createBuku = (req, res) => {
  const { judul, penulis, tahunTerbit } = req.body;
  const newBuku = {
    id: buku.length + 1,
    judul,
    penulis,
    tahunTerbit
  };
  buku.push(newBuku);
  res.status(201).json(newBuku);

    
}

const updateBuku = (req, res) => {
  
    
}

const deleteBuku = (req, res) => {
    
}

module.exports = {
    getAllBuku,
    getBukuById,
    createBuku,
    updateBuku,
    deleteBuku
}