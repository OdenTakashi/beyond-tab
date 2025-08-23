class User
  def initialize(name)
    @name = name
  end
end

---

class User
  def initialize(name, age, gender)
    @name = name
    @age = age
    @gender = gender
  end
end

---

class User
  def initialize(name, age, gender)
    @name = name
    @age = age
    @gender = gender
  end

  def laugh
    Emotion.new.laugh
  end
end

---

class User
  def initialize(name, age, gender)
    @name = name
    @age = age
    @gender = gender
  end

  def laugh(reason)
    Emotion.new.laugh(reason)
  end
end

class Emotion
  def laugh(reason)
    puts 'wwwwwww'
  end
end
---

# しくしく
class User
  def initialize(name, age, gender)
    @name = name
    @age = age
    @gender = gender
  end

  def laugh
    Emotion.new.laugh
  end

  def cry
    Emotion.new.cry
  end
end

class Emotion
  def laugh
    puts 'wwwwwww'
  end

  def cry
    puts 'しくしく'
  end
end

---

# coding
class User
  def initialize(name, age, gender)
    @name = name
    @age = age
    @gender = gender
  end

  def laugh
    Emotion.new.laugh
  end

  def cry
    Emotion.new.cry
  end

  def coding
    Action.new.coding
  end
end

class Emotion
  def laugh
    puts 'wwwwwww'
  end

  def cry
    puts 'しくしく'
  end

  def passion
    puts 'やるぞぉ!'
  end
end

class Action
  def coding
    Emotion.new.passion
  end
end
---

# vibe coding
class User
  def initialize(name, age, gender)
    @name = name
    @age = age
    @gender = gender
  end

  def laugh
    Emotion.new.laugh
  end

  def cry
    Emotion.new.cry
  end

  def coding(ai_agent: false)
    if ai_agent
      Action.new.coding(ai_agent: true)
    else
      Action.new.coding
    end
  end
end

class Emotion
  def laugh
    puts 'wwwwwww'
  end

  def cry
    puts 'しくしく'
  end

  def passion(ai_agent: false)
    if ai_agent
      puts 'バイブコーディング最高!'
    else
      puts 'やるぞぉ!'
    end
  end
end

class Action
  def coding(ai_agent: false)
    Emotion.new.passion(ai_agent: ai_agent)
  end
end

---
# 年齢確認
class User
  attr_reader :age

  def initialize(name, age, gender)
    @name = name
    @age = age
    @gender = gender
  end

  def laugh
    Emotion.new.laugh
  end

  def cry
    Emotion.new.cry
  end

  def coding(ai_agent: false)
    if ai_agent
      Action.new.coding(ai_agent: true)
    else
      Action.new.coding
    end
  end
end

class Emotion
  def laugh
    puts 'wwwwwww'
  end

  def cry
    puts 'しくしく'
  end

  def passion(ai_agent: false)
    if ai_agent
      puts 'バイブコーディング最高!'
    else
      puts 'やるぞぉ!'
    end
  end
end

class Action
  def coding(ai_agent: false)
    Emotion.new.passion(ai_agent: ai_agent)
  end
end

---

# AIコーディングが虚無になる
class User
  attr_reader :age

  def initialize(name, age, gender)
    @name = name
    @age = age
    @gender = gender
  end

  def laugh
    Emotion.new.laugh
  end

  def cry
    Emotion.new.cry
  end

  def coding(ai_agent: false)
    Action.new.coding(ai_agent: ai_agent)
  end
end

class Emotion
  def laugh
    puts 'wwwwwww'
  end

  def cry
    puts 'しくしく'
  end

  def passion
    return nil
  end
end

class Action
  def coding(ai_agent: false)
    Emotion.new.passion
    Emotion.remove_method(:passion)
  end
end

---

class User
  def initialize(name, age, gender)
    @name = name
    @age = age
    @gender = gender
  end

  def laugh(reason)
    Emotion.new.laugh(reason)
  end

  def cry(reason)
    Emotion.new.cry(reason)
  end
end

class Emotion
  def laugh(reason)
    unless reason.present?
      raise "Laughter requires a reason"
    end
    puts 'wwwwwww'
  end

  def cry(reason)
    unless reason.present?
      raise "Crying requires a reason"
    end
    puts 'しくしく'
  end
end

class Action
  def coding
    Emotion.new.passion
  end
end
---