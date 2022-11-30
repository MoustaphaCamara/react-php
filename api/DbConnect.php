<?php

class Database
{
    private string $host;
    private string $user;
    private string $pass;
    private string $dbName;
    private PDO $connexion;
    private PDOStatement $request;

    public function __construct(string $host, string $user, string $dbName, string $pass)
    {
        $this->host = $host;
        $this->user = $user;
        $this->pass = $pass;
        $this->dbName = $dbName;
    }
    public function connect(): PDO
    {
        $path = "mysql:host=$this->host;dbname=$this->dbName;charset=utf8";

        try {
            $this->connexion = new PDO($path, $this->user, $this->pass);
            $this->connexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $this->connexion;
        } catch (PDOException $e) {
            throw new PDOException($e->getMessage(), (int)$e->getCode());
        }
    }

    public function prepReq(string $query, array $array = []): PDOStatement
    {
        $this->request = $this->connexion->prepare($query);
        $this->request->execute($array);
        return $this->request;
    }

    public function fetchData(): array
    {
        return $this->request->fetchAll();
    }
}
