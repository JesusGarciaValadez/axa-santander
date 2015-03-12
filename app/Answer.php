<?php namespace axaSantander;

use Illuminate\Database\Eloquent\Model;

class Answer extends Model {

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'answers';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [ 'first_answer', 'second_answer', 'third_answer', 'fourth_answer', 'fifth_answer' ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [ ];

}
