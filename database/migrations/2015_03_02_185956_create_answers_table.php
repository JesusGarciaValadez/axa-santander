<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAnswersTable extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create( 'answers', function( Blueprint $table )
        {
            $table->increments( 'id' );
            $table->string( 'first_answer' );
            $table->string( 'second_answer' );
            $table->string( 'third_answer' );
            $table->string( 'fourth_answer' );
            $table->string( 'fifth_answer' );
            $table->timestamps( 'created_at' );
        } );
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }

}
