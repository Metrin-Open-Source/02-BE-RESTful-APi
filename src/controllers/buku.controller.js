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
  const id = parseInt(req.params.id);
  const { judul, penulis, tahunTerbit } = req.body;
  const bukuIndex = buku.findIndex((b) => b.id === id);

  if (bukuIndex !== -1) {
    buku[bukuIndex] = {
      ...buku[bukuIndex],
      judul,
      penulis,
      tahunTerbit
    };
    res.json({
      status: 200,
      message: 'Buku berhasil diperbarui',
      data: buku[bukuIndex]
    });
  } else {
    res.status(404).json({ message: 'Buku tidak ditemukan' });
  }
}

const deleteBuku = (req, res) => {
  const id = parseInt(req.params.id);
  const bukuIndex = buku.findIndex((b) => b.id === id);
  
  if (bukuIndex !== -1) {
    const deletedBook = buku[bukuIndex];
    buku.splice(bukuIndex, 1);
    res.json({
      status: 200,
      message: 'Buku berhasil dihapus',
      data: deletedBook
    });
  } else {
    res.status(404).json({ message: 'Buku tidak ditemukan' });
  }
}

module.exports = {
    getAllBuku,
    getBukuById,
    createBuku,
    updateBuku,
    deleteBuku
}