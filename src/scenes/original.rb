class User
  attr_reader :age

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

  def coding(ai_agent: false)
    if ai_agent
      Action.new.coding(ai_agent: true)
    else
      Action.new.coding
    end
  end
end

class EmotionManager
  def laugh(reason)
    if reason.present?
      HumorManager.new.laugh(reason)
    elsif reason.blank?
      ## refactor: laugh without a reason
      raise "Laughter requires a reason"
    end
  end

  def cry(reason)
    if reason.present?
      SadnessManager.new.cry(reason)
    elsif reason.blank?
      ## memo: When I was a child, I used to be able to cry for no reason.
      raise "Crying requires a reason"
    end
  end

  def passion
    PassionManager.new.passion
  end

  def empty_feeling
    # memo: do noting
    return nil
  end
end

class ActionManager
  def coding(ai_agent: false)
    if ai_agent
      EmotionManager.remove_method(:passion)
      EmotionManager.new.empty_feeling
    else
      EmotionManager.new.passion
    end
  end
end


---
Me = User.new(name: 'John Doe', age: '23', gender: 'man')

Me.lough
#=> 'wwwwwww'

Me.cry
#=> 'しくしく'

Me.coding
#=> 'やるぞぉ!'

Me.coding(ai_agent: true)
#=> 'バイブコーディング最高!'

travel_to(Time.current + 1.years)

puts  Me.age
#=> 24

Me.coding(ai_agent: true)
#=> nil

Me.lough
#=> Laughter requires a reason (RuntimeError)

Me.cry
#=> Crying requires a reason (RuntimeError)

chatで感情は不要なので、削除します
Object.send(:remove_const, :EmotionManager)
chatで行動権利は不要なので、削除します
Object.send(:remove_const, :ActionManager)
chatで人格は不要なので、削除します
Object.send(:remove_const, :User)