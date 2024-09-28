import { Router, Request, Response } from "express";
import { openDb } from "../database";
import { User } from "../models/User";

const router = Router();

//Criar usuario

router.post("/", async (req: Request, res: Response) => {
  try {
    const db = await openDb();
    const user: User = req.body.data;
    const result = await db.run(
      "INSERT INTO users (name, email, profile, age, phone) VALUES (?, ?, ?, ?, ?)",
      [user.name, user.email, user.profile, user.age, user.phone]
    );
    res.status(201).json({ id: result.lastID, ...user });
  } catch (error) {
    res.status(500).json({ error: "Não foi possível resgistrar este usuário" });
  }
});
router.get("/", async (req: Request, res: Response) => {
  try {
    const db = await openDb();

    const page = parseInt(req.query.page as string) || 1;
    const search = (req.query.search as string) || "";
    const perfil = (req.query.profile as string) || "";

    const limit = 5;
    const offset = (page - 1) * limit;

    let query = "SELECT * FROM users WHERE 1=1";
    const params: any[] = [];

    if (search) {
      query += " AND (name LIKE ? OR email LIKE ?)";
      params.push(`%${search}%`, `%${search}%`);
    }

    if (perfil) {
      query += " AND profile = ?";
      params.push(perfil);
    }

    query += " LIMIT ? OFFSET ?";
    params.push(limit, offset);

    const users = await db.all(query, params);

    let countQuery = "SELECT COUNT(*) as count FROM users WHERE 1=1";
    const countParams: any[] = [];

    if (search) {
      countQuery += " AND (name LIKE ? OR email LIKE ?)";
      countParams.push(`%${search}%`, `%${search}%`);
    }

    if (perfil) {
      countQuery += " AND profile = ?";
      countParams.push(perfil);
    }

    const totalCountResult = await db.get(countQuery, countParams);
    const totalUsers = totalCountResult.count;
    const totalPages = Math.ceil(totalUsers / limit);

    res.json({
      users,
      totalPages,
      currentPage: page,
    });
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

router.put("/:id", async (req: Request, res: Response) => {
  try {
    const db = await openDb();
    const user: User = req.body.data;
    const result = await db.run(
      "UPDATE users SET name = ?, email = ?, profile = ?, age = ?, phone= ? WHERE id = ?",
      [user.name, user.email, user.profile, user.age, user.phone, req.params.id]
    );
    if (result.changes === 0) {
      res.status(404).json({ error: "User not found" });
    } else {
      res.json({ id: Number(req.params.id), ...user });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update user" });
  }
});

router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const db = await openDb();

    const result = await db.run("DELETE FROM users WHERE id = ?", [
      req.params.id,
    ]);

    if (result.changes === 0) {
      res.status(404).json({ error: "User not found" });
    } else {
      res.json({ message: "User deleted successfully" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete user" });
  }
});
export default router;
